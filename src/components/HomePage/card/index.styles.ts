import { Padding } from "@mui/icons-material";
import type { Theme } from "@mui/material/styles";
import theme from "../../../theme/theme";

// Definindo os estilos com makeStyles
const useStyles = () => ({
  card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: (theme: Theme) => theme.palette.background.paper,
    borderRadius: (theme: Theme) => theme.shape.borderRadius,
    boxShadow: (theme: Theme) => theme.shadows[2],
    height: "180px",
    width: "100%",
    "@media screen and (min-width:600px)": {
      width: "480px",
    },
    "&:hover": {
      border: "1px solid #7F7667",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: (theme: Theme) => theme.spacing(1),
    flex: 1,
    width: "100%",
  },
  title: {
    color: "#261A00",
    fontSize: "18px",
    fontWeight: "regular",
    lineHeight: "normal",
  },
  description: {
    color: "#6B5C3F",
  },
  price: {
    color: "#4B6546",
    fontWeight: "bold",
    fontSize: "20px",
  },
});

export default useStyles;
