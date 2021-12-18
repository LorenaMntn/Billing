import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import './main.css';

function MyApp({ Component, pageProps }) {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
