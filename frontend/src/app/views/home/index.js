import { Flex } from '@chakra-ui/layout'
import { Box, Button, Link } from '@chakra-ui/react'
import { Link as ReachLink } from "@reach/router"
import React from 'react'

function Home(){
    return(
        <Flex bgColor="#C1DFC4" h="100vh" justify="center" align="center">
            <Box w="650px" h="450px" className="container-img">
            <Flex direction="column" w="300px" p="40px">
               <h1>IronProfile</h1>
                <h2>Today we will create an app with authoritation, adding some cool styles!</h2>
                <Link as={ReachLink} to="/signup">
                    <Button colorScheme="teal" variant="solid">
                        Signup
                    </Button>
                </Link>
                <Link as={ReachLink} to="/login">
                <Button colorScheme="teal" variant="outline">
                    Login
                </Button>
                </Link>
            </Flex>

            </Box>
        </Flex>
    )
}

export default Home