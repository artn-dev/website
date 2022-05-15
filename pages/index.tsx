import { VStack, Box, useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Footer from '../components/Footer';
import MainHero from '../components/MainHero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <VStack spacing={0}>
        <IconButton
          position={'fixed'}
          top={'20px'}
          right={'20px'}
          onClick={toggleColorMode}
          aria-label='Alternar entre temas escuro e claro'
        >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>

        <MainHero />
        <Box py={10} w={'full'}>
          <Projects />
        </Box>
        <Box py={10} w={'full'}>
          <Skills />
        </Box>
        <Box w={'full'}>
          <Footer />
        </Box>
      </VStack>
    </>
  );
};

export default Home;
