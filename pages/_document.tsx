import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          {/* This is the default <head> for all pages across the website. */}
          <link rel="icon" href="favicon.ico" />
          {/* This meta should be put in the Head for each page as it will not be the
              same, whereas the two above are the same for all pages */}
          <meta
            name="description"
            content="A free online cpbitmap conversion tool to PNG or JPEG"
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
