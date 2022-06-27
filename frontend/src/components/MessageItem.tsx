import { VStack,Text } from '@chakra-ui/react'
import React, { FC } from 'react'

const MessageItem:FC<{text:string}> = ({text}) => {
  return (
    <VStack bg="gray.100" w="100%" alignItems="flex-start" p={3}> 
        <Text fontSize={"lg"} color="gray.600" >{text}</Text> </VStack>
  )
}

export default MessageItem