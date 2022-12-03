import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsStars } from 'react-icons/bs';
import { MdSupportAgent } from 'react-icons/md';
import { FaHandHoldingHeart, FaHandsHelping } from 'react-icons/fa';
import { GoLaw } from 'react-icons/go';

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;

  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={5}
      backdropFilter="auto"
      backdropBlur="1rem"
      bgColor="whiteAlpha.50"
      shadow="xl"
      border="1px solid"
      borderColor="whiteAlpha.200"
      rounded="lg"
    >
      <Flex
        justifyContent={{ base: 'center', md: 'center' }}
        direction={{ base: 'column-reverse', md: 'column' }}
      >
        <Box alignContent="center">
          <StatLabel fontWeight={'medium'}>{title}</StatLabel>
          <StatNumber fontSize={['sm', 'md', 'lg']} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <VStack>
          <Box pt={6} my={'auto'} color="whiteAlpha.800">
            {icon}
          </Box>
        </VStack>
      </Flex>
    </Stat>
  );
}

export function Description() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 4, md: 14, lg: 0 }}
        mt={[0, 0, -28]}
      >
        <SimpleGrid columns={{ base: 2, md: 5 }} spacing={{ base: 5, lg: 5 }}>
          <StatsCard
            title={'Referência no '}
            stat={'Maranhão'}
            icon={<BsStars size={'3em'} />}
          />
          <StatsCard
            title={'Atendimento'}
            stat={'Online/Presencial'}
            icon={<MdSupportAgent size={'3em'} />}
          />
          <StatsCard
            title={'Compromisso com'}
            stat={'Seus Direitos'}
            icon={<FaHandsHelping size={'3em'} />}
          />
          <StatsCard
            title={'Atendimento'}
            stat={'Personalizado'}
            icon={<FaHandHoldingHeart size={'3em'} />}
          />
          <StatsCard
            title={'Especialista'}
            stat={'Criminal'}
            icon={<GoLaw size={'3em'} />}
          />
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
