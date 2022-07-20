import { alpha } from "@mui/material/styles";

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

const PRIMARY = {
  main: "#E41B12",
  light: "#EE0000",
  lighter: "#FF0000",
  dark: "#DD2211",
  darker: "#AA3333",
};

const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
};
