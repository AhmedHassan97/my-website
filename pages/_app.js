import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Navbar from "../components/Navbar/Nav";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="luxury" attribute="data-theme">
      <Head lang="en">
        <title>Ahmed Hassan&apos;s Website</title>
        <meta
          name="description"
          content="Hi, my name is Ahmed Hassan. I am a MERN stack developer with a proven track record of
          designing and implementing innovative user-centric websites."
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          name="og:title"
          property="og:title"
          content="Hassan's Website"
        ></meta>
        <meta
          name="og:description"
          property="og:description"
          content="Hi, my name is Ahmed Hassan. I am a MERN stack developer with a proven track record of
          designing and implementing innovative user-centric websites."
        ></meta>
        <meta property="og:site_name" content="Ahmed Hassan's Website"></meta>
        <meta property="og:image" content="/site.PNG"></meta>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
