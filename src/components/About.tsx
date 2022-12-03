import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';

export function About() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bgGradient="linear(to-r, #330519 10%, #330519 20%, #BF778A)">
      <Container maxW={'7xl'}>
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text color="whiteAlpha.900" as={'span'}>
                  Conheça a
                </Text>{' '}
                <Text color="#BF778A" as="span" textShadow="#000 1px 1px" m={6}>
                  Especialista
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'whiteAlpha.700'}>
                O escritório MS ADVOCACIA E ASSESSORIA JURÍDICA atua em toda a Região do
                Maranhão. Somos especialistas em Direito Penal se traduz no servir
                através de uma Advocacia Criminal Humanizada, discreta e ágil na defesa
                dos interesses de seus clientes.
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button
                  size="lg"
                  variant="outline"
                  rounded={'full'}
                  color={'white'}
                  _hover={{
                    bg: 'blackAlpha.300',
                  }}
                  leftIcon={<AiOutlineArrowRight size={16} />}
                  onClick={onOpen}
                >
                  Saiba mais
                </Button>
                <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent
                    backdropFilter="auto"
                    backdropBlur="1rem"
                    bgColor="whiteAlpha.50"
                    shadow="xl"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    rounded="lg"
                  >
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text fontWeight="bold" mb="1rem">
                        You can scroll the content behind the modal
                      </Text>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        rounded="full"
                        colorScheme="pink"
                        variant="outline"
                        mr={3}
                        onClick={onClose}
                      >
                        Fechar
                      </Button>
                      <Button variant="solid" rounded="full" colorScheme="pink">
                        <Link
                          style={{ textDecoration: 'none' }}
                          href="https://api.whatsapp.com/send?phone=5598981258283&text=Ol%C3%A1%2C%20Dr%C2%AA.%20Mayana!%20Vim%20pelo%20site.%20Podemos%20conversar%3F%20"
                          isExternal
                        >
                          Fale com a Mayana
                        </Link>
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1} justifyContent="center" align="center" p={[2, 16, 10]}>
            <Image
              rounded="lg"
              shadow="lg"
              alt={'Login Image'}
              objectFit={'cover'}
              boxSize="lg"
              src={'/img/may.webp'}
            />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
