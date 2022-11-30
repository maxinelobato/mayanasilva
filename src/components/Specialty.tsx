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

import {
  FcIdea,
  FcInspection,
  FcSettings,
  FcCheckmark,
  FcConferenceCall,
} from 'react-icons/fc';
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
              <Accordion variant="outline" allowToggle={true} reduceMotion={true}>
                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'brandblue.400', color: 'brandbeige.200' }}
                    >
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcIdea} w={16} h={16} />}
                            text={'Ideação: Viabilidade Jurídica da Ideia'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="1" fontSize="sm">
                        <Icon as={FcCheckmark} color={'#330519'} /> A ideia é lícita?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'#330519'} /> Existe alguma lei
                        que a define?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'#330519'} /> Existe alguma lei
                        que a proíbe?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'#330519'} /> Esse tipo de negócio
                        é regulamentado?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'#330519'} /> Existe a obrigação
                        de ter alguma certificação ou registro em algum órgão?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'#330519'} /> Consigo desenvolver
                        a regulamentação junto ao legislativo?
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="capitalize">
                        serviços:
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'#330519'} /> Pesquisa de
                        viabilidade jurídica
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'#330519'} /> Viabilidade de
                        construção legislativa
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'brandblue.400', color: 'brandbeige.200' }}
                    >
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcConferenceCall} w={16} h={16} />}
                            text={'Formação: Ainda não é a hora de registrar a empresa'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="1" fontSize="sm">
                        <Icon as={FcCheckmark} color={'#330519'} /> Vai empreender
                        sozinho?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'#330519'} /> Vai ter sócios?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'#330519'} /> Qual o time ideal
                        para colocar a ideia em prática?
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="capitalize">
                        serviços:
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'#330519'} /> Elaboração de um MoU
                        (memorando de entendimentos entre sócios)
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'brandblue.400', color: 'brandbeige.200' }}
                    >
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcSettings} w={16} h={16} />}
                            text={
                              'Criação/Tração: O negócio já possui viabilidade jurídica, o empreendedor coloca a mão na massa para resolver uma dor do mercado '
                            }
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="1" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Como
                        contratar desenvolvedores, programadores, designers e outros
                        prestadores de serviços?
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="capitalize">
                        serviços:
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Contratos
                        com terceiros
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Contratos de
                        vesting
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Formalizar
                        cessão dos direitos autorais de software
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Como falar
                        do projeto para essas e outras pessoas (como investidores) sem
                        que a ideia seja divulgada?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Termos ou
                        cláusulas de confidencialidade
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'brandblue.400', color: 'brandbeige.200' }}
                    >
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcInspection} w={16} h={16} />}
                            text={
                              'Validação: Testes moderados do MVP (Produto Mínimo Viável) no mercado'
                            }
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
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Formalizar a
                        empresa (tipo societário e regime de tributação)
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Busca prévia
                        INPI
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Registrar
                        marca/patente
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
