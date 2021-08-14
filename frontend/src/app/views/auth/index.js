import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {
    Box,
    Button,
    FormControl,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react'

  import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'

  //SERVICIOS:
  import {loginEndpoint, signupEndpoint} from '../../services/auth-ws'
  import {getUserEndpoint} from '../../services/user_ws'
//   import {Ctx} from '../../hooks/context'

function Auth({match, history, location, ...restProps}){

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [ loaderSpin, setLoaderSpin] = useState(false)
    const [data, setData] = useState({})

   // const login = useContext(Ctx)

   const [user, setUser] = useState(null)

   //Servirá para modificar el user al login:
   const login = (user) => setUser(user)

   //Servirá para poner como null el user al logout
   const logout = () => setUser(null)

   useEffect(() => {
       async function checkSession(){
           try{
               const {data} = await getUserEndpoint()
               console.log("De esta forma llega la data :", data)
               setUser(data.result._id ? data.result : null)
           }catch(error){
               console.log("error context", error)
               setUser(null)
           }
       }
       checkSession()
   }, [])

   const value = {
       user,
       login,
       logout
   }

    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
        console.log("Que data nos manda", data)
    }

    const handleSubmit = async (e, user) => {
        e.preventDefault()
        try{
        setLoaderSpin(true)
        const formSubmit = match.path === "/signup" ? signupEndpoint : loginEndpoint
        const {data} = await formSubmit(user)
        console.log(data)
       // history.push('/verify-email')
        console.log("La data que nos manda: ", data)
        }catch(error){
            console.log("El error", error.response)
        }
        console.log(user)
    }


      return(
        <Box
        bg={useColorModeValue('gray.50', 'inherit')}
        minH="100vh"
        py="12"
        px={{ base: '4', lg: '8' }}
      >
        <Box maxW="md" mx="auto">

          <Heading textAlign="center" size="xl" fontWeight="extrabold">
          {match.path === "/signup" ? "Signup to you new account" : "Login to your account"}
          </Heading>

          <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
            {`${match.path !== '/signup' ? "New here?" : 'Have an account?'} | `}
              <Link to={match.path !== "/signup" ? "/signup" :"/login" }>Press here</Link>
         </Text>

         <form onSubmit={handleSubmit}>
          <Stack spacing="6">
             <Input name="email" type="email" autoComplete="email" placeholder="Email Address" onChange={handleChange}/>

            <InputGroup size="md">
            <Input
                name="password"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
            </InputGroup>

            {match.path === "/signup" &&
            <Input placeholder="Username" name="username" onChange={handleChange} />}

            {match.path === "/signup" &&
            <FormControl name="campus" onChange={handleChange}>
            <Select placeholder="Select your campus" name="campus">
                <option value="Madrid">Madrid</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Miami">Miami</option>
                <option value="Paris">Paris</option>
                <option value="Berlin">Berlin</option>
                <option value="Amsterdam">Amsterdam</option>
                <option value="Mexico">Mexico</option>
                <option value="Lisbon">Lisbon</option>
                <option value="Sao Paulo">Sao Paulo</option>
            </Select>
            </FormControl>}

            {match.path === "/signup" &&
            <FormControl name="course" onChange={handleChange} >
            <Select placeholder="Select your course" name="course">
                <option>Web Dev</option>
                <option>UX/UI</option>
                <option>Data Analytics</option>
                <option>Cyber security</option>
            </Select>
            </FormControl>}

            <Button type="submit" colorScheme="blue" size="lg" fontSize="md" isLoading={loaderSpin}>
            {match.path === "/signup" ? "Signup" : "Login"}
            </Button>
            </Stack>
            </form>

            <SimpleGrid mt="6" columns={3} spacing="3">
            <a href= "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v11.0">
              <Button color="currentColor" variant="outline">
                <VisuallyHidden>Login with Facebook</VisuallyHidden>
                <FaFacebook />
              </Button>
              </a>

              <a href="http://localhost:3001/api/auth/google">
              <Button color="currentColor" variant="outline">
                <VisuallyHidden> Login with Google </VisuallyHidden>
                <FaGoogle />
              </Button>
              </a>
              <Button color="currentColor" variant="outline">
                <VisuallyHidden>Login with Github</VisuallyHidden>
                <FaGithub />
              </Button>
            </SimpleGrid>
        </Box>
      </Box>
      )
  }

export default Auth