import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="luxury" attribute="data-theme">
      <Head>
        <title>Hassan's Website</title>
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
        <meta
          property="og:url"
          content="https://hassan-website-89n44pgb0-ahmedhassan202025.vercel.app/"
        ></meta>
        <meta property="og:image" content="/site.PNG"></meta>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
