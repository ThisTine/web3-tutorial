import { createContext, useEffect, useState } from "react";
import useWeb3 from "../eth/useWeb3";

export const userContext = createContext({user:"",balance:"",fetchBalance:async()=>{}})

const UserContextProvider = (props:any)=>{
    const [web3] = useWeb3()
    const [user,setuser] = useState("")
    const [balance,setbalance] = useState("")
    useEffect(()=>{
        const init = async ()=>{
            if(web3 && web3 !== true){
               const users = await web3.eth.getAccounts()
               const balance = await web3.eth.getBalance(users[0])
               setuser(users[0])
               setbalance(web3.utils.fromWei(balance,"ether"))
            }
        }
        init()
    },[web3,(window as any).etherium])
    const fetchBalance = async()=>{
        if(web3 && web3 !== true){
            const balance = await web3.eth.getBalance(user)
            setbalance(web3.utils.fromWei(balance,"ether"))
         }
    }
    return <userContext.Provider {...props} value={{user,balance,fetchBalance}}  />
}

export default UserContextProvider