// src/components/Example.styles.ts
import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material/styles"; // Importação do tipo Theme

const useStyles = makeStyles<Theme>((theme) => ({
	root: {
		padding: theme.spacing(2),
		backgroundColor: theme.palette.background.default,
		textAlign: "center",
	},
	button: {
		color: theme.palette.secondary.contrastText,
		backgroundColor: theme.palette.secondary.main,
		"&:hover": {
			backgroundColor: theme.palette.secondary.dark,
		},
	},
}));

export default useStyles;
