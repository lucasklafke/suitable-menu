import type { Theme } from "@mui/material/styles";

// Definindo os estilos com makeStyles
const useStyles = () => ({
  root: {
    backgroundColor: (theme: Theme) => theme.palette.background.default,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },
  header: {
    background: "#FFDFA0",
    color: "#FFF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "fit-content",
    justifyContent: "space-between",
    padding: (theme: Theme) => theme.spacing(3),
    marginBottom: (theme: Theme) => theme.spacing(4),
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: (theme: Theme) => theme.spacing(2),
    width: "100%",
    height: "100%",
    maxWidth: "19000px",
    padding: (theme: Theme) => theme.spacing(2),
  },
  card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: (theme: Theme) => theme.palette.background.paper,
    paddingLeft: (theme: Theme) => theme.spacing(2),
    borderRadius: (theme: Theme) => theme.shape.borderRadius,
    boxShadow: (theme: Theme) => theme.shadows[2],
    height: "180px",
    width: "100%",
    "@media screen and (min-width:600px)": {
      width: "480px",
    },
  },
  headerTitle: {
    color: "#261A00",
    fontSize: "24px",
    fontWeight: "bold",
  },
  search: {
    backgroundColor: "#FFF8F5",
    borderRadius: (theme: Theme) => theme.shape.borderRadius,
    position: "relative",
  },
});

export default useStyles;
