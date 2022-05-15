import {
  Box,
  VStack,
  Text,
  useBreakpointValue,
  Image,
  Wrap,
  WrapItem,
  useColorModeValue,
} from '@chakra-ui/react';
import skills from '../content/skills.json';

const Skills = () => {
  return (
    <>
      <Box id={'skills'} w={'full'} px={'16'}>
        <Text
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          mb={'8'}
        >
          As habilidades que vou suar por você
        </Text>

        <Wrap justify={'center'} spacing={'30px'} w={'full'}>
          {skills.map((skill, i) => (
            <WrapItem key={i} maxW={'4rem'}>
              <VStack>
                <Image
                  boxSize={'full'}
                  src={skill.iconPath}
                  alt={skill.name}
                  filter={useColorModeValue(null, 'invert(100%)')}
                />
                <Text>{skill.name}</Text>
              </VStack>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </>
  );
};

export default Skills;
