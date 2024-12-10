import theme from "../../../theme/theme";
import type { Theme } from "@mui/material";

const useStyles = () => ({
  root: {
    background: "#FFDFa0",
    bottom: 0,
    height: "fit-content",
    width: "100%",
    position: "fixed",
    paddingY: (theme: Theme) => theme.spacing(1),
  },
  button: {
    background: "#FFF",
    color: "#261A00",
    fontSize: "16px",
    fontWeight: "semibold",
  },
  price: {
    fontSize: "16px",
    color: "#261A00",
    fontWeight: "bold",
  },
  text: {
    color: "#261A00",
    fontSize: "16px",
    fontWeight: "bold",
    height: "fit-content",
  },
  priceContainer: {
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",
  },
  counter: {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(1),
    height: "fit-content",
    alignItems: "center",
  },
});

export default useStyles;
