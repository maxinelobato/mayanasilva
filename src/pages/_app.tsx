import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import { accordionTheme } from '../components/Accordion';
import { ScrollCtaWhatsapp } from '../components/ScrollCtaWhatsapp';
import type { AppProps, NextWebVitalsMetric } from 'next/app';

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
    <ChakraProvider theme={theme} resetCSS={true}>
      <ScrollCtaWhatsapp />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default MyApp;
