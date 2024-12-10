// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";

// Criação do tema
const theme = createTheme({
  palette: {
    primary: {
      main: "#007FFF",
    },
    secondary: {
      main: "#secondary",
    },
    background: {
      default: "#FFF8F1",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#616161",
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  // Aqui o spacing será reconhecido
  spacing: 8, // Valor padrão para o spacing
});

export default theme;
