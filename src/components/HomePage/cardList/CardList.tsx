import { Box, CircularProgress, Grid2, Stack, Typography } from "@mui/material";
import useSWR from "swr";
import CardComponent from "../card/CardComponent";
import theme from "../../../theme/theme";
import { Link } from "react-router-dom";
import useStyles from "./index.styles";
import { useSearchContext } from "../../../contexts/searchContext";

export interface Product {
  id: number;
  name: string;
  details: string;
  url_image: string;
  category_id: number;
  category_name: string;
  category_image_url: string | null;
  category_order: number;
  pizza: boolean;
  price: number;
  promotional_price: number | null;
  tags: string[];
  is_kilo: boolean;
  order: number;
  product_type: string;
}

export default function CardList() {
  const styles = useStyles();
  const { searchTerm } = useSearchContext();

  const productsUrl = "estoque/v2/app/products/list/?app_variant=mobile";
  const { data, error, isLoading } = useSWR<{ products: Product[] }>(
    `/${productsUrl}`
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Erro ao carregar os produtos.</Typography>;
  }

  if (!data || data.products.length === 0) {
    return <Typography>Nenhum produto encontrado.</Typography>;
  }

  const groupedProducts = Object.entries(
    data.products.reduce<Record<string, Product[]>>((acc, product) => {
      const { category_name } = product;

      // Inicializar a categoria no acumulador
      if (!acc[category_name]) {
        acc[category_name] = [];
      }

      // Filtro por searchTerm
      if (
        [product.name, product.details].some((field) =>
          field.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ) {
        acc[category_name].push(product);
      }

      return acc;
    }, {})
  )
    .filter(([category, products]) => products.length > 0) // Filtra as categorias com lista vazia
    .reduce<Record<string, Product[]>>((acc, [category, products]) => {
      acc[category] = products;
      return acc;
    }, {});

  if (Object.entries(groupedProducts).length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography sx={{ padding: 4, fontSize: "20" }}>
          Nenhum produto encontrado.
        </Typography>
      </Box>
    );
  }

  return Object.entries(groupedProducts).map(([type, products]) => (
    <Stack key={type} sx={styles.categoryList}>
      <Typography sx={styles.category}>{type}</Typography>
      <Grid2 container sx={styles.container}>
        {products.map((product) => (
          <Grid2 key={product.id}>
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <CardComponent product={product} />
            </Link>
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  ));
}
