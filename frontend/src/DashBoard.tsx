import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import  { useEffect, useState } from 'react'
import useContract from './eth/useContract'

const DashBoard = () => {
    const contract = useContract()
    const [messages,setmessages] = useState<string[]>([])
    const [isowner,setisowner] = useState(true)
    useEffect(()=>{
        if(contract){
             contract.methods.readmails().call().then((item:any)=>{setmessages([...item])}).catch(()=>setisowner(false))
        }
    },[contract])
    useEffect(()=>{
        (window as any).ethereum.on("accountsChanged", ()=>{window.location.reload()})
    },[])
  return (
    <Box w="100%" shadow={"sm"} p={5} bg="white" padding={5} rounded="2xl" border={"1px solid"} borderColor="blackAlpha.300" >
        <Heading>Messages</Heading>
        {isowner ? <VStack gap={2}  maxH="500px" overflowY={"auto"} >
        {messages.map((item,ind)=><VStack  key={ind} bg="gray.100" w="100%" alignItems="flex-start" p={3}> 
        <Text fontSize={"lg"} color="gray.600" >{item}</Text> </VStack> ) }
        </VStack> : <Text>You are not the owner of this contract !</Text>}
    </Box>
  )
}

export default DashBoard