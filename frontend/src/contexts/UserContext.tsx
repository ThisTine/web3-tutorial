import { createContext, useContext, useLayoutEffect, useState } from "react";
import { ethereumContext } from "./EthereumContext";

export const userContext = createContext({user:"",balance:"",fetchBalance:async()=>{}})

const UserContextProvider = (props:any)=>{
    const [user,setuser] = useState("")
    const [balance,setbalance] = useState("")
    const {web3} = useContext(ethereumContext)
    const init = async ()=>{
        // get balance and username
    }
    useLayoutEffect(()=>{
        if(web3)
        init()
    },[web3])
    

    return <userContext.Provider {...props} value={{user,balance,fetchBalance:init}}  />
}

export default UserContextProvider