
import {
    Container,
    Heading,
    Stack,
    Text,
    Button,
  } from '@chakra-ui/react';
  import React from 'react'
import {Link} from 'react-router-dom';

function Home(){
    return(
        <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            IronProfile{' '}
            <Text as={'span'} color={'blue.400'}>
              made easy
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          Today we will create an app with authorization, adding some cool styles!
          </Text>
          <Stack spacing={6} direction={'row'}>
          <Link to="/signup">
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.500' }}>
              Sign In
            </Button>
            </Link>

            <Link to="/login">
            <Button rounded={'full'} px={6}>
             Login
            </Button>
            </Link>


          </Stack>
        </Stack>
      </Container>
    )
}

export default Home