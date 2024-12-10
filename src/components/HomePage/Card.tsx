import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import useStyles from "./index.styles";

export default function CardComponent() {
  const styles = useStyles();

  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.cardContent}>
        <Typography variant="h6" sx={styles.title}>
          Sushi
        </Typography>
        <Typography sx={styles.description}>Descrição do produto 1</Typography>
        <Typography sx={styles.price}>R$40,80</Typography>
      </CardContent>
      <CardMedia
        component={"img"}
        sx={{ width: "180px", height: "auto" }}
        style={{ aspectRatio: "1" }}
        image="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
      />
    </Card>
  );
}
