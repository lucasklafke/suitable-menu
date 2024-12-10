import { Box, CircularProgress, TextField, Typography } from "@mui/material";
import useStyles from "./index.styles";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import type { Product } from "../../components/HomePage/cardList/CardList";
import Header from "../../components/public/header/Header";
import Footer from "../../components/ProductPage/footer/Footer";
import { useState } from "react";

export default function ProductPage() {
  const { id } = useParams();
  const styles = useStyles();
  const [observation, setObservation] = useState<string>(""); // Armazenando as observações

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
  const product = data.products.find((product) => product.id === Number(id));
  if (!product) {
    return;
  }
  return (
    <Box sx={styles.root}>
      <Header shouldShowSearch={false} />
      <Box component="img" sx={styles.topImage} src={product?.url_image} />
      <Box sx={styles.detailsContainer}>
        <Typography sx={styles.title}>{product?.name}</Typography>
        <Typography sx={styles.details}>{product?.details}</Typography>
      </Box>
      <TextField
        label="Observações"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={observation}
        onChange={(e) => setObservation(e.target.value)}
        sx={styles.observationContainer}
      />
      <Footer product={product} observation={observation} />
    </Box>
  );
}
