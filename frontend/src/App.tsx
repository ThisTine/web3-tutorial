import {  Container, VStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import SendLove from './components/SendLove';
import DashBoard from './DashBoard';

function App() {

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
