import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { FaPenSquare, FaShieldAlt } from 'react-icons/fa';
import { FcCheckmark } from 'react-icons/fc';
import { IoIosPeople } from 'react-icons/io';
import { IoBusiness } from 'react-icons/io5';
import { ButtonCta } from './ButtonCta';
interface FeatureProps {
  text: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'} justifyContent={'center'}>
      <Flex w={16} h={16} align={'center'} justify={'center'} rounded={'full'}>
        {icon}
      </Flex>
      <Text fontWeight={600} align={'center'}>
        {text}
      </Text>
    </Stack>
  );
};

export function Specialty() {
  return (
    <Box bgColor="#330519">
      <Container maxW={'7xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, md: 14, lg: 16 }}
          mt={-10}
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
            lineHeight={'110%'}
          >
            Veja como podemos lhe ajudar
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={{ base: 1, lg: 6 }}>
            <Box position="relative">
              <Accordion reduceMotion={true} defaultIndex={[0]} allowMultiple>
                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={IoIosPeople} w={16} h={16} />}
                            text={'Acompanhamento em Delegacia'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="1" fontSize="sm">
                        <Icon as={FcCheckmark} /> A ideia é lícita?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Existe alguma lei que a define?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Existe alguma lei que a proíbe?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Esse tipo de negócio é regulamentado?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Existe a obrigação de ter alguma
                        certificação ou registro em algum órgão?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Consigo desenvolver a regulamentação
                        junto ao legislativo?
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="capitalize">
                        serviços:
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Pesquisa de viabilidade jurídica
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Viabilidade de construção legislativa
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={IoBusiness} w={16} h={16} />}
                            text={'Atuação em Tribunais'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="1" fontSize="sm">
                        <Icon as={FcCheckmark} /> Vai empreender sozinho?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Vai ter sócios?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Qual o time ideal para colocar a ideia
                        em prática?
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="capitalize">
                        serviços:
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Elaboração de um MoU (memorando de
                        entendimentos entre sócios)
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FaShieldAlt} w={16} h={16} />}
                            text={'Defesa em Processos Criminais'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="1" fontSize="sm">
                        <Icon as={FcCheckmark} /> Como contratar desenvolvedores,
                        programadores, designers e outros prestadores de serviços?
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="capitalize">
                        serviços:
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Contratos com terceiros
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Contratos de vesting
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Formalizar cessão dos direitos
                        autorais de software
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Como falar do projeto para essas e
                        outras pessoas (como investidores) sem que a ideia seja
                        divulgada?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Termos ou cláusulas de
                        confidencialidade
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FaPenSquare} w={16} h={16} />}
                            text={'Execução Penal'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Heading size="xs" textTransform="capitalize">
                        serviços:
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Formalizar a empresa (tipo societário
                        e regime de tributação)
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Busca prévia INPI
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} /> Registrar marca/patente
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </SimpleGrid>
          <ButtonCta />
        </Stack>
      </Container>
    </Box>
  );
}
