import { createContext, useState } from "react";

export const userContext = createContext({user:"",balance:"",fetchBalance:async()=>{}})

const UserContextProvider = (props:any)=>{
    const [user,setuser] = useState("")
    const [balance,setbalance] = useState("")
    
    

    return <userContext.Provider {...props} value={{user,balance,fetchBalance:()=>{}}}  />
}

export default UserContextProvider