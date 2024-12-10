import { useState } from "react";
import { useSearchContext } from "../../../contexts/searchContext";
import useStyles from "./index.styles";
import theme from "../../../theme/theme";
import {
  AppBar,
  Badge,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../../../contexts/cartContext";
import { Link } from "react-router-dom";
type Props = {
  shouldShowSearch: boolean;
};
export default function Header({ shouldShowSearch }: Props) {
  const styles = useStyles();
  const { searchTerm, setSearchTerm } = useSearchContext();
  const { cartItems } = useCartContext();
  const [expanded, setExpanded] = useState(false);
  const handleFocus = () => setExpanded(true);
  const handleBlur = () => setExpanded(false);
  return (
    <AppBar sx={styles.header} variant="elevation" position="static">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Typography variant="h1" sx={styles.headerTitle}>
          Klafk Menu
        </Typography>
      </Link>
      <Stack direction={"row"} sx={styles.searchContainer}>
        {shouldShowSearch && (
          <TextField
            label="Buscar"
            variant="outlined"
            fullWidth
            size="small"
            onFocus={handleFocus} // Expande quando o campo é focado
            onBlur={handleBlur} // Retorna ao tamanho original quando o campo perde o foco
            sx={{
              width: expanded ? "80%" : "50%", // Expande o campo de 150px para 300px
              transition: "width 0.3s ease", // Animação suave
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#261a00" }} />
                  </InputAdornment>
                ),
              },
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
        <Button sx={styles.cartButton}>
          <Badge badgeContent={cartItems.length}>
            <ShoppingCartIcon sx={styles.cartIcon} />
          </Badge>
        </Button>
      </Stack>
    </AppBar>
  );
}
