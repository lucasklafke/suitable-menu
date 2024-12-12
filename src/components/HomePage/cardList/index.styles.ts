import type { Theme } from "@mui/material";
import theme from "../../../theme/theme";

const useStyles = () => ({
  container: {
    width: "fit-content",
    gap: (theme: Theme) => theme.spacing(2),
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: (theme: Theme) => theme.spacing(1),
    flex: 1,
    width: "100%",
  },
  category: {
    color: "#1F1B13",
    fontSize: "24px",
    fontWeight: "semibold",
  },
  categoryList: {
    display: "flex",
    flexDirection: "column",
    gap: (theme: Theme) => theme.spacing(2),
    padding: (theme: Theme) => theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
});

export default useStyles;
