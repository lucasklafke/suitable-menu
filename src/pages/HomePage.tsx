import {
  AppBar,
  Badge,
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useStyles from "../components/styles/HomePage/index.styles";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import theme from "../theme/theme";
import CardList from "../components/HomePage/cardList/CardList";
import { useSearchContext } from "../contexts/searchContext";

export default function HomePage() {
  const classes = useStyles();
  const { searchTerm, setSearchTerm } = useSearchContext();

  const [expanded, setExpanded] = useState(false);
  const handleFocus = () => setExpanded(true);
  const handleBlur = () => setExpanded(false);

  return (
    <Box sx={classes.root}>
      <AppBar sx={classes.header} variant="elevation" position="static">
        <Typography variant="h1" sx={classes.headerTitle}>
          Título principal
        </Typography>
        <Stack direction={"row"} spacing={theme.spacing(1)}>
          <TextField
            label="Buscar"
            variant="outlined"
            fullWidth
            size="small"
            onFocus={handleFocus} // Expande quando o campo é focado
            onBlur={handleBlur} // Retorna ao tamanho original quando o campo perde o foco
            sx={{
              width: expanded ? 300 : 150, // Expande o campo de 150px para 300px
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
          <Button>
            <Badge badgeContent="4">
              <ShoppingCartIcon />
            </Badge>
          </Button>
        </Stack>
      </AppBar>
      <CardList />
    </Box>
  );
}
