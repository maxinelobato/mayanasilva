import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  Container,
  Text,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react';
import { IoLogoWhatsapp } from 'react-icons/io';
import '@fontsource/alex-brush';

export function Navbar() {
  return (
    <>
      <Box w={'full'} position={'absolute'}>
        <Container maxW="6xl" as={Stack}>
          <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
            <Flex flex={{ base: 1 }} justify={['center', 'center', 'left']}>
              <Text
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily="Alex Brush"
                fontSize={['2xl', '3xl', '4xl']}
                color={useColorModeValue('gray.800', 'white')}
              >
                Mayana Silva
              </Text>
            </Flex>
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={2}>
                <Button leftIcon={<IoLogoWhatsapp size={22} />}>
                  <Link
                    style={{ textDecoration: 'none' }}
                    href="https://api.whatsapp.com/send?phone=5598981258283&text=Ol%C3%A1%2C%20Dr%C2%AA.%20Mayana!%20Vim%20pelo%20site.%20Podemos%20conversar%3F%20"
                    isExternal
                  >
                    (98) 98125-8283
                  </Link>
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box p={[8, 4, 0]} />
    </>
  );
}
