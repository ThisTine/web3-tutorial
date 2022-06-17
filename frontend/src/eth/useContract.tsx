import { useEffect, useState } from "react"
import useWeb3 from "./useWeb3"
import { Contract } from "web3-eth-contract";

// REPLACE WITH YOUR ABI
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

// REPLACE WITH YOUR ADDRESS
const address = "0x8D030D709c5be9C8d77d4298A42FC8b5ccE2d406"

const useContract = ()=>{
    const [web3,isloading] = useWeb3()
    const [contract,setContract] = useState<Contract|null>(null)
    useEffect(()=>{
        const init = async()=>{
        if(!isloading && web3 && web3 !== true){
            const account = (await web3.eth.getAccounts())[0]
           const contract = new web3.eth.Contract(abi,address,{from:account})
           setContract(contract)
        }
    }
    init()
},[web3,isloading])
    return contract
}

export default useContract