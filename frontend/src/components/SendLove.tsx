import { VStack, Heading, Textarea, Input, HStack, Button, useBoolean, InputGroup, InputRightAddon, useToast } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { ethereumContext } from '../contexts/EthereumContext'
import { userContext } from '../contexts/UserContext'

const SendLove = () => {
    const {web3,contract} = useContext(ethereumContext)
    const [isLoading,{on,off}] = useBoolean(false);
    const [form,setform] = useState({money:"",message:""})
    const toast = useToast({status:"error",position:"top-right"})
    const {fetchBalance} = useContext(userContext)
    const send = async ()=>{
        on()
        if(web3)
        try{
            await contract?.methods.sendMessage(form.message)
            .send({...((form.money && parseFloat(form.money) > 0 )&& {value: web3.utils.toWei(form.money,"ether")})  })
            
            await fetchBalance()
            setform({money:"",message:""})
            toast({title:"Success !",status:"success"})
        }catch(err:any){
            toast({title:"Error",description:err.toString()})
        }
        off()
    }
    return (
        <VStack w="100%" shadow={"sm"} 
        alignItems={"flex-start"} bg="white" padding={5} rounded="2xl" border={"1px solid"} borderColor="blackAlpha.300" gap={5}  >
            <Heading>SendLove</Heading>
            <Textarea disabled={isLoading} value={form.message} 
            placeholder='message.....' 
            onChange={(e)=>setform(val=>({...val,"message":e.target.value}))}></Textarea>
            <InputGroup>
            <Input min={0} value={form.money} placeholder='money ?' disabled={isLoading} type="number" onChange={(e)=>setform(val=>({...val,"money":e.target.value+""}))} />
            <InputRightAddon>ETH</InputRightAddon>            
            </InputGroup>
            <HStack justifyContent={"flex-end"} w="100%"  >
                <Button colorScheme={"pink"} isLoading={isLoading} onClick={()=>send()} >send love</Button>
            </HStack>
        </VStack>
    )
}

export default SendLove