import { VStack, Heading, Textarea, Input, HStack, Button, useBoolean, InputGroup, InputRightAddon, useToast } from '@chakra-ui/react'
import { useState } from 'react'

const SendLove = () => {
    const [isLoading,{on,off}] = useBoolean(false);
    const [form,setform] = useState({money:"",message:""})
    const toast = useToast({status:"error",position:"top-right"})
    const send = async ()=>{
        on()
        
        off()
    }
    return (
        <VStack w="100%" shadow={"sm"} 
        alignItems={"flex-start"} bg="white" padding={5} rounded="2xl" border={"1px solid"} borderColor="blackAlpha.300" gap={5}  >
            <Heading>SendLove</Heading>
            <Textarea disabled={isLoading} value={form.message} 
            placeholder='message.....' 
            onChange={(e:any)=>setform(val=>({...val,"message":e.target.value}))}></Textarea>
            <InputGroup>
            <Input min={0} value={form.money} placeholder='money ?' disabled={isLoading} type="number" onChange={(e:any)=>setform(val=>({...val,"money":e.target.value+""}))} />
            <InputRightAddon>ETH</InputRightAddon>            
            </InputGroup>
            <HStack justifyContent={"flex-end"} w="100%"  >
                <Button colorScheme={"pink"} isLoading={isLoading} onClick={()=>send()} disabled={!form.message || !form.money} >send love</Button>
            </HStack>
        </VStack>
    )
}

export default SendLove