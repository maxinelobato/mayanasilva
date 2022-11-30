import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Dra. Mayana Silva - Advogada Criminal</title>
      </Head>
      <Analytics />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
