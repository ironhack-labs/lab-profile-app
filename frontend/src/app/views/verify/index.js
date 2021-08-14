import {
    Flex,
    Stack,
    Heading,
    Text,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';

  import {Link} from 'react-router-dom';

  import { ChatIcon, CheckCircleIcon } from '@chakra-ui/icons'

function Verify({match, history, location, ...restProps}){
    return(
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        py={12}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          boxShadow={'2xl'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          p={10}
          spacing={8}
          align={'center'}>

          {match.path !== "/confirmation-page" ?
          <ChatIcon w={20} h={20} color="blue.500"/>
          : <CheckCircleIcon w={20} h={20} color="blue.500"/> }

          <Stack align={'center'} spacing={2}>
            <Heading
              textTransform={'uppercase'}
              fontSize={'3xl'}
              color={useColorModeValue('gray.800', 'gray.200')}>
            {match.path !== "/confirmation-page" ? "Verify your email!" : "Your email is now verified"}
            </Heading>
            <Text fontSize={'lg'} color={'gray.500'}>
            {match.path !== "/confirmation-page" ? "Please check your inbox for our confirmation email" : "Click on the button below to get started"}
            </Text>
          </Stack>
          {match.path === "/confirmation-page" &&
          <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              flex={'1 0 auto'}
              _hover={{ bg: 'blue.500' }}
              _focus={{ bg: 'blue.500' }}>
              <Link to="/profile">Profile</Link>
            </Button>
          </Stack>}
        </Stack>
      </Flex>
    )
  }

          // <Flex justify="center" align="center" h="100vh" w="100%">
        //  {match.path !== "/confirmation-page" ?
        // <h1>Por favor revisa la bandeja de entrada para verificar tu correo</h1>
        // :
        //  <h1>¡Tu correo ya está confirmado!</h1>}
        //  </Flex>

export default Verify