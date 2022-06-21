import { createContext, useContext, useEffect, useState } from "react";
import { ethereumContext } from "./EthereumContext";

export const userContext = createContext({user:"",balance:"",fetchBalance:async()=>{}})

const UserContextProvider = (props:any)=>{
    const {web3} = useContext(ethereumContext)
    const [user,setuser] = useState("")
    const [balance,setbalance] = useState("")
    
    useEffect(()=>{
        const init = async ()=>{
            if(web3 ){
               const users = await web3.eth.getAccounts()
               const balance = await web3.eth.getBalance(users[0])
               setuser(users[0])
               setbalance(web3.utils.fromWei(balance,"ether"))
            }
        }
        init()
    },[web3])
    useEffect(()=>{
        (window as any).ethereum.on("accountsChanged", ()=>{window.location.reload()})
    },[])
    
    const fetchBalance = async()=>{
        if(web3){
            const balance = await web3.eth.getBalance(user)
            setbalance(web3.utils.fromWei(balance,"ether"))
         }
    }
    return <userContext.Provider {...props} value={{user,balance,fetchBalance}}  />
}

export default UserContextProvider