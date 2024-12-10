import { Box } from "@mui/material";
import useStyles from "./index.styles";
import CardList from "../../components/HomePage/cardList/CardList";
import Header from "../../components/public/header/Header";

export default function HomePage() {
  const classes = useStyles();

  return (
    <Box sx={classes.root}>
      <Header shouldShowSearch={true} />
      <CardList />
    </Box>
  );
}
