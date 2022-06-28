import { Box, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import MessageItem from './components/MessageItem'

const DashBoard = () => {
  const [messages,setmessages] = useState<string[]>([])
  const getMessages = async()=>{
    // get messages from contract
  }
  useEffect(()=>{
    getMessages()
  },[])
  return (
    <Box w="100%" shadow={"sm"} p={5} bg="white" padding={5} rounded="2xl" border={"1px solid"} borderColor="blackAlpha.300" >
        <Heading>Messages</Heading>
        {messages.map((item,ind)=><MessageItem key={ind} text={item} />)}
    </Box>
  )
}

export default DashBoard