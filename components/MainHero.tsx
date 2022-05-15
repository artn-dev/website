import {
  Button,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';

const MainHero = () => {
  return (
    <>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={'url(/background.jpg)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        paddingX={0}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
            >
              Azemar Teixeira
            </Text>
            <Text
              color={'white'}
              fontWeight={500}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}
            >
              Aluno, desenvolvedor, sempre em busca de conhecimento
            </Text>
            <Button
              bg={'blue.500'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.700' }}
              as={'a'}
              href={'#projects'}
            >
              Conheça meu trabalho
            </Button>
          </Stack>
        </VStack>
      </Flex>
    </>
  );
};

export default MainHero;
