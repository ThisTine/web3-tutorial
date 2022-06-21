import { Container, Heading, VStack } from '@chakra-ui/react'
import { FC } from 'react'

const ErrorPage:FC<{text?:string}> = ({text}) => {
  return (
    <div className="App">
        <Container maxW="container.sm" h="100vh">
          <VStack alignItems={"center"} justifyContent="center" h="100%" >
          <Heading textAlign={"center"}>{text ? text : "Loading..."}</Heading>
          </VStack>
        </Container>
    </div>
  )
}

export default ErrorPage