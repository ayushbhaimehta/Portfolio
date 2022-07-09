import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name='apple-mobile-web-app-title' content='Ayush Bhai Mehta - Full Stack Developer' />
          <meta name='description' content='Ayush Bhai Mehta - Full Stack Developer' />

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