import {
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Stack,
} from "@mui/material";
import type { Product } from "../../HomePage/cardList/CardList";
import { useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import { useCartContext } from "../../../contexts/cartContext";
import useStyles from "./index.styles";

type Props = {
  product: Product;
  observation: string;
};

export default function Footer({ product, observation }: Props) {
  const styles = useStyles();
  const [quantity, setQuantity] = useState(1);
  const total = quantity * product.price;

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const { addToCart, cartItems } = useCartContext();

  return (
    <Box sx={styles.root}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {/* Contador de Quantidade */}
        <Stack sx={styles.counter}>
          <IconButton onClick={handleDecrease} size="medium" sx={styles.text}>
            <Remove />
          </IconButton>
          <Typography sx={styles.text}>{quantity}</Typography>
          <IconButton onClick={handleIncrease} size="medium" sx={styles.text}>
            <Add />
          </IconButton>
        </Stack>

        <Box sx={styles.priceContainer}>
          <Typography sx={styles.price}>R$ {total.toFixed(2)}</Typography>
          <Button
            variant="contained"
            sx={styles.button}
            size="small"
            onClick={() =>
              addToCart({
                id: product.id,
                quantity,
                price: product.price,
                name: product.name,
                observation: observation,
              })
            }
          >
            adicionar
          </Button>
        </Box>
      </Toolbar>
    </Box>
  );
}
