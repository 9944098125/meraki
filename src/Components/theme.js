import { createTheme } from "@mui/material";
import { colors } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      dark: colors.indigo[900],
      main: colors.indigo[700],
      light: colors.indigo[200],
      bg: colors.indigo[50],
    },
    secondary: {
      dark: colors.deepPurple[900],
      main: colors.deepPurple[500],
      light: colors.deepPurple[100],
      bg: colors.deepPurple[50],
    },
  },
  typography: {
    fontFamily: "Quicksand, sans-serif",
  },
});

export default theme;
