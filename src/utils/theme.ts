import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const light = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
      primary: { main: "#fde74c" },
      secondary: { main: "#5b7c99" },
    },
  })
);

const dark = responsiveFontSizes(
  createTheme({
    palette: { mode: "dark", secondary: { main: "#6da9dd" } },
  })
);

const themes = { dark, light };

export default themes;
