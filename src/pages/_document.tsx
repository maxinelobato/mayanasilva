import { ColorModeScript, theme } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta property="og:title" content="Dra. Mayana Silva - Advogada Criminal" />
          <meta name="description" content="Dra. Mayana Silva - Advogada Criminal" />
          <meta
            property="og:description"
            content="Dra. Mayana Silva - Advogada Criminal"
          />
          <meta property="og:url" content="https://lp-nextsjs.vercel.app/" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
