import  { createContext, FC, ReactNode, useEffect, useState } from 'react'
import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'
import ErrorPage from '../pages/ErrorPage'

interface ethereumContextType {
    web3?:Web3,
    contract?: Contract
}

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