import NextLink from 'next/link';
import {
  Box,
  Flex,
  Link,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

interface HeaderLinkProps {
  children: React.ReactNode;
  href?: string;
}

const HeaderLink = ({ children, href = '/' }: HeaderLinkProps) => (
  <NextLink href={href} passHref>
    <Link
      px={2}
      py={1}
      href={href}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      {children}
    </Link>
  </NextLink>
);

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = [
    ['Home', '#'],
    ['Projetos', '#projects'],
    ['Habilidades', '#skills'],
  ];

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'blue.700')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {links.map((link, i) => (
                <HeaderLink href={link[1]} key={i}>
                  {link[0]}
                </HeaderLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <IconButton
                onClick={toggleColorMode}
                aria-label='Alternar entre temas escuro e claro'
              >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </IconButton>
            </Stack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map((link, i) => (
                <HeaderLink href={link[1]} key={i}>
                  {link[0]}
                </HeaderLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Header;
