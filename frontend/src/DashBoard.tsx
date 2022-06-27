import { Box, Heading } from '@chakra-ui/react'

const DashBoard = () => {
    
  return (
    <Box w="100%" shadow={"sm"} p={5} bg="white" padding={5} rounded="2xl" border={"1px solid"} borderColor="blackAlpha.300" >
        <Heading>Messages</Heading>
        
    </Box>
  )
}

export default DashBoard