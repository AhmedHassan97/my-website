import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content="Ahmed Hassan's Websiite" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Ahmed Hassan's Websiite"
          />
          <meta
            name="description"
            content="This is Ahmed Hassan Personal Website"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />

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
