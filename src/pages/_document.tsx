import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta property="title" content="Dra. Mayana Silva - Advogada Criminal" />
          <meta
            name="description"
            content="Advogada Criminal Especialista em Acompanhamento em Delegacia, Atuação em Tribunais, Defesa em Processos Criminais, Execução Penal"
          />
          <meta property="url" content="https://mayanasilva.vercel.app/" />
          <meta property="type" content="website" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" href="/img/bgImage.webp" as="image" />
          <link rel="preload" href="/img/may.webp" as="image" />
        </Head>
        <body>
          {/* 👇 Here's the script */}
          <title>Dra. Mayana Silva - Advogada Criminal</title>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
