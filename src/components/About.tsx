import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
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
                O escritório MS ADVOCACIA E ASSESSORIA JURÍDICA atua na defesa dos
                contribuintes pessoa jurídica ou pessoa física na execuções fiscais
                promovidas pelos Municípios, Estados e pela União (tributos federais).
                No campo em que atua, temos vasta experiência prática, conhecimento e
                dedicação aos clientes, para que seus direitos sejam encaminhados com
                adequação aquilo que se busca.
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
                  <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text fontWeight="bold" mb="1rem">
                        You can scroll the content behind the modal
                      </Text>
                    </ModalBody>
                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant="ghost">Secondary Action</Button>
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
              src={'/img/may.png'}
            />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
