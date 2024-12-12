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
    width: "480px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
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
    [theme.breakpoints.down("sm")]: {
      padding: (theme: Theme) => theme.spacing(1.5),
    },
  },
  title: {
    color: "#261A00",
    fontSize: "18px",
    fontWeight: "regular",
    lineHeight: "normal",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      fontWeight: "bold",
    },
  },
  description: {
    color: "#6B5C3F",
    fontSize: "16px",
    fontWeight: "normal",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    maxHeight: "4em",
    textOverflow: "ellipsis",
  },
  price: {
    color: "#4B6546",
    fontWeight: "bold",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  cardMedia: {
    width: "40%",
    height: "auto",
  },
});

export default useStyles;
