import {
  Box,
  Text,
  useBreakpointValue,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';
import projects from '../content/projects.json';

const Projects = () => {
  const lastProjects = projects.slice(0, 4);

  return (
    <>
      <Box w={'full'} px={'16'}>
        <Text
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          mb={'8'}
        >
          Veja alguns de meus projetos
        </Text>

        <SimpleGrid columns={{ lg: 3, md: 2, sm: 1 }} spacing={'20px'}>
          {lastProjects.map((project, i) => (
            <Box
              key={i}
              maxW={'lg'}
              borderWidth={'1px'}
              borderRadius={'md'}
              p={'5'}
              display={'flex'}
              flexDirection={'column'}
            >
              <Text fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}>
                {project.title}
              </Text>
              <Text
                color={'blackAlpha.700'}
                fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}
                noOfLines={4}
                mb={'2'}
              >
                {project.body}
              </Text>
              {project.link && (
                <Box mt={'auto'}>
                  <Button
                    as={'a'}
                    href={project.link}
                    target='_blank'
                    bg={'blue.300'}
                    color={'white'}
                    rounded={'full'}
                    size={'xs'}
                  >
                    Saiba mais
                  </Button>
                </Box>
              )}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Projects;
