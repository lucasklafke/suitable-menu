import type { Theme } from "@mui/material";
import theme from "../../theme/theme";

const useStyles = () => ({
  root: {
    backgroundColor: (theme: Theme) => theme.palette.background.default,
    minHeight: "100vh",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },
  topImage: {
    width: "100%",
    maxHeight: "40vh",
    aspectRatio: "2",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    padding: (theme: Theme) => theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: (theme: Theme) => theme.spacing(2),
    },
    gap: (theme: Theme) => theme.spacing(1),
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    fontSize: "28px",
    fontWeight: "bold",
    color: "#261A00",
  },
  details: {
    fontSize: "16px",
    fontWeight: "semibold",
    color: "#6B5C3F",
  },
  observationContainer: {
    marginX: (theme: Theme) => theme.spacing(4),
    width: "calc(100% - 32px)",
    maxWidth: "800px",
    [theme.breakpoints.down("sm")]: {
      margin: (theme: Theme) => theme.spacing(2),
    },
  },
});

export default useStyles;
