import "../styles/globals.css";
import type { AppProps } from "next/app";
import GContext from "../Contexts/GContext";
import { createTheme, ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GContext>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </GContext>
  );
}

export default MyApp;

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a202c",
    },
    secondary: {
      main: "#2d3748",
    },
    text: {
      primary: "#1a202c",
      secondary: "#718096",
    },
  },
});
