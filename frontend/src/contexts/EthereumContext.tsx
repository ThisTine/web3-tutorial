import  { createContext, FC, ReactNode, useEffect, useState } from 'react'
import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'
import ErrorPage from '../pages/ErrorPage'

interface ethereumContextType {
    web3?:Web3,
    contract?: Contract
}

const abi:any[] = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
    constant: undefined,
    payable: undefined,
    signature: 'constructor'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'i', type: 'uint256' } ],
    name: 'readmailByindex',
    outputs: [ { internalType: 'string', name: '', type: 'string' } ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0xcf86c2c8'
  },
  {
    inputs: [],
    name: 'readmails',
    outputs: [ { internalType: 'string[]', name: '', type: 'string[]' } ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0xd72b99a2'
  },
  {
    inputs: [ { internalType: 'string', name: '_message', type: 'string' } ],
    name: 'sendMessage',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
    constant: undefined,
    payable: true,
    signature: '0x469c8110'
  }
]

const address = ""

export const ethereumContext = createContext<ethereumContextType>({})

const EthereumContextProvider:FC<{children:ReactNode}> = ({children}) => {
    const [web3,setWeb3] = useState<null|Web3>(null)
    const [contract,setContract] = useState<null|Contract>(null)
    const [isLoading,setIsLoading] = useState(true)
    const isMetamask = (window as any).ethereum
    const init = async ()=>{
      if(isMetamask){
        // get web3 provider from metamask
        // put provider to Web3
        // connect to contract
      }
    }
    useEffect(()=>{
      init()
    },[])
  if(!isMetamask) return <ErrorPage text='please install Metamask !' />
  if(isLoading) return <ErrorPage />
  return (
    <ethereumContext.Provider value={{web3: (web3 as any),contract: (contract as any)}} children={children} />
  )
}

export default EthereumContextProvider