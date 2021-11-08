import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Hassan.dev</title>
          <meta property="og:title" content="Hassan.dev" key="title" />

          <link
            href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@200&amily=Ubuntu+Mono&family=Poppins:wght@100&display=swap&family=Orbitron:wght@900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
