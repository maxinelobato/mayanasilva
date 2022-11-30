import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { accordionTheme } from '../components/Accordion';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components: {
    Accordion: accordionTheme,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Dra. Mayana Silva - Advogada Criminal</title>
      </Head>
      <Analytics />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
