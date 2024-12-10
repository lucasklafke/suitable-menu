import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import useStyles from "./index.styles";
import type { Product } from "../cardList/CardList";

type Props = {
  product: Product;
};

export default function CardComponent({ product }: Props) {
  const styles = useStyles();
  if (!product) {
    return null;
  }
  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.cardContent}>
        <Typography variant="h6" sx={styles.title}>
          {product.name}
        </Typography>
        <Typography sx={styles.description}>{product.details}</Typography>
        <Typography sx={styles.price}>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Typography>
      </CardContent>
      <CardMedia
        component={"img"}
        sx={{ width: "40%", height: "auto" }}
        style={{ aspectRatio: "1" }}
        image={product.url_image}
      />
    </Card>
  );
}
