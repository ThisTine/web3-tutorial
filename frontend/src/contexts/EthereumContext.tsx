import  { createContext, FC, ReactNode } from 'react'
import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'
import useContract from '../eth/useContract'

import useWeb3 from '../eth/useWeb3'
import ErrorPage from '../pages/ErrorPage'

interface ethereumContextType {
    web3?:Web3,
    contract?: Contract
}

export const ethereumContext = createContext<ethereumContextType>({})

const EthereumContextProvider:FC<{children:ReactNode}> = ({children}) => {
    const [web3,isloading] = useWeb3()
    const contract = useContract(web3)
    if(isloading){
      return(
        <ErrorPage />
      )
    }
    if(!isloading && !web3){
      return(
        <ErrorPage text='Please install Metamask !' />
      )
    }
    if(!contract){
        return <ErrorPage />
    }
  return (
    <ethereumContext.Provider value={{web3: (web3 as Web3),contract}} children={children} />
  )
}

export default EthereumContextProvider