import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

import MetaTags from "../components/MetaTags";

class MyDocument extends Document {
  // enables static CSS rendering:
  // https://primer.style/react/getting-started#static-css-rendering
  // https://styled-components.com/docs/advanced#nextjs
  // https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.js
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          {/* This is the default <head> for all pages across the website. */}
          <MetaTags
            siteUrl="https://cpbitmap.github.io/"
            title="CPBitmap Converter"
            description="A free online cpbitmap conversion tool. Convert cpbitmap files to PNG, JPEG, or TIFF."
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
