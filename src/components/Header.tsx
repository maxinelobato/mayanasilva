import { Container, Box, Heading, Text, Stack } from '@chakra-ui/react';
import { BgImage } from './BgImage';
import { ButtonCta } from './ButtonCta';
import { Description } from './Description';
import { Navbar } from './Navbar';

export function Header() {
  return (
    <BgImage>
      <Box bgGradient="linear(to-bl, rgba(0, 0, 0, 0.5), rgba(51, 5, 25) 80%)">
        <Navbar />
        <Container maxW="7xl">
          <Stack as={Box} textAlign={'center'} spacing={[4, 4, 8]} py={[18, 32, 36]}>
            <Box>
              <Heading
                as="h1"
                fontWeight="bold"
                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                lineHeight="110%"
                color="whiteAlpha.800"
              >
                Procurando uma Advogada Especialista <br />
              </Heading>
              <Text
                as="span"
                textShadow="#000 1px 1px"
                m={3}
                color="#BF778A"
                fontWeight="bold"
                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              >
                em <i>Criminal</i>
              </Text>
              <Text
                as="h2"
                color={'whiteAlpha.800'}
                fontWeight="semibold"
                fontSize={['lg', '2xl', '3xl']}
              >
                Receba toda a ajuda jurídica necessária com <i>Sigilo.</i>
                <br />
              </Text>
            </Box>
            <ButtonCta />
          </Stack>
          <Description />
        </Container>
      </Box>
    </BgImage>
  );
}
