import  { useEffect, useState } from "react"
import Web3 from "web3"


const useWeb3 = ()=>{
    const [web3,setweb3] = useState<null | Web3>(null)
    const [isloading,setisloading] = useState(true)
    useEffect(()=>{
        const init =async()=>{
            if((window as any).ethereum){
               await (window as any).ethereum.request({ method: "eth_requestAccounts" });
                const web3 = new Web3((window as any).ethereum)
                setweb3(web3)
                setisloading(false)
            }else{
                setisloading(false)
                setweb3(null)
            }
        }
        init()
    },[window])
    return [web3,isloading]
}

export default useWeb3