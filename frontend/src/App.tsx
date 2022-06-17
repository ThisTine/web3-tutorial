import { Box, Button, Container, Heading, HStack, Input, Textarea, VStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import SendLove from './components/SendLove';
import DashBoard from './DashBoard';
import useWeb3 from './eth/useWeb3';

function App() {
  const [web3,isloading] = useWeb3()
  if(isloading){
    return(
      <div className="App">
      <Container maxW="container.lg">
        <Heading>Loading</Heading>
      </Container>
    </div>
    )
  }
  if(!isloading && !web3){
    return(
      <div className="App">
      <Container maxW="container.lg">
        <Heading> Please install metamask !</Heading>
      </Container>
    </div>
    )
  }
  return (
    <div className="App">
      <NavBar/>
      <Container maxW="container.lg">
        <VStack gap={5} w="100%">
        <SendLove/>
        <DashBoard />
        </VStack>

      </Container>
    </div>
  );
}

export default App;
