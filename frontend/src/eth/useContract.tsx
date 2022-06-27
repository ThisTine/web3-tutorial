import { useEffect, useState } from "react"
import { Contract } from "web3-eth-contract";
import Web3 from "web3";

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
const address = "0xc38919f342f368f594ff60819efb079cf1f9a0b2f8d25bdd474a4a10c560c056"

const useContract = (web3:Web3 | null | boolean)=>{
    // const [web3,isloading] = useWeb3()
    const [contract,setContract] = useState<Contract|null>(null)
    useEffect(()=>{
        const init = async()=>{
        if(web3 && web3 !== true){

            const account = (await web3.eth.getAccounts())[0]
           const contract = new web3.eth.Contract(abi,address,{from:account})

           
           setContract(contract)
        }
    }
    init()
},[web3])
    return contract
}

export default useContract