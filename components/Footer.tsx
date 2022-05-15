import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Tooltip,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { ReactNode, useState } from 'react';

interface SocialButtonProps {
  children: ReactNode;
  label: string;
  href?: string;
}

const SocialButton = ({ children, label, href = '#' }: SocialButtonProps) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const EmailButton = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 1000);
  };

  return (
    <Tooltip label='E-mail copiado em seu clipboard' isOpen={emailCopied}>
      <span>
        <chakra.button
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
          rounded={'full'}
          w={8}
          h={8}
          cursor={'pointer'}
          display={'inline-flex'}
          alignItems={'center'}
          justifyContent={'center'}
          transition={'background 0.3s ease'}
          _hover={{
            bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
          }}
          onClick={copyEmail}
        >
          <VisuallyHidden>E-mail</VisuallyHidden>
          <FaEnvelope />
        </chakra.button>
      </span>
    </Tooltip>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>
          © 2021 Azemar da Rosa Teixeira Neto. Todos os direitos reservados
        </Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Linkedin'}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={'Github'}>
            <FaGithub />
          </SocialButton>
          <EmailButton />
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
