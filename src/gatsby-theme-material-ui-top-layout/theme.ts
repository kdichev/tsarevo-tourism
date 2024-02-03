import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({ shape: { borderRadius: 15 } });
console.log(theme);

export default responsiveFontSizes(theme);
