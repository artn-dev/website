import { VStack, Box } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainHero from '../components/MainHero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <>
      <VStack spacing={0}>
        <Box pos='sticky' top={0} zIndex={2} w={'full'}>
          <Header />
        </Box>
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
