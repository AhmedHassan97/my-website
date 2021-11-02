import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="halloween" attribute="data-theme">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
