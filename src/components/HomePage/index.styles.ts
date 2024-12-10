import type { Theme } from "@mui/material/styles";

// Definindo os estilos com makeStyles
const useStyles = () => ({
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
  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: (theme: Theme) => theme.spacing(1),
    flex: 1,
    width: "100%",
  },
  title: {
    color: "#261A00",
    fontSize: "24px",
    fontWeight: "regular",
  },
  description: {
    color: "#6B5C3F",
  },
  price: {
    color: "#4B6546",
  },
});

export default useStyles;
