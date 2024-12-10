import type { Theme } from "@mui/material";
import theme from "../../../theme/theme";
import { Height } from "@mui/icons-material";

const useStyles = () => ({
  header: {
    background: "#FFDFA0",
    color: "#FFF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "fit-content",
    justifyContent: "space-between",
    padding: (theme: Theme) => theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: (theme: Theme) => theme.spacing(2),
    },
  },
  headerTitle: {
    color: "#261A00",
    fontSize: "24px",
    fontWeight: "bold",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "end",
    gap: (theme: Theme) => theme.spacing(1),
    width: "100%",
    maxWidth: "400px",
  },
  cartButton: {
    width: "fit-content",
    height: "40px",
    color: "#261A00",
    padding: (theme: Theme) => theme.spacing(1),
  },
  cartIcon: {
    fontSize: "24px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
});

export default useStyles;
