// SPDX-License-Identifier: MIT

// We are writing the Inbox contract
// The inbox contract works like mailbox where everyone can send message to this mailbox 
//then the owner (and only the owner) of the mailbox can read all the mail.
// the sender can also send money to the owner through this contract.

// Using solidity version 0.8.6
pragma solidity ^0.8.6;

contract Inbox{
    // declare variable to store address of owner and mails.
    // payable means that this address can be used to tranfer money into. 
    // these 2 are private varible mean that it's not suppose to be call outside the contract.
    address payable private owner;
    string[] private messages;
    
    // using constructor to store the adress of owner
    constructor(){
        // set owner to be the one who deploy the contract
        owner = payable(msg.sender);
    }

    // make function that send message and tranfer the money to owner
    function sendMessage(string memory _message) public payable{
        // push message into array
        messages.push(_message);
        // tranfer money to the owner
        owner.transfer(msg.value);
    }

    // make function that could read all mails in contracts and using modifier "onlyowner" to restricted permission to the owner.
    function readmails() public onlyowner view returns(string[] memory) {
        return messages;
    }

    // make function that could read mail by index of messages in contracts and using modifier "onlyowner" to restricted permission to the owner.
    function readmailByindex(uint i) public onlyowner view returns(string memory){
        return messages[i];
    }
    
    // modifer onlyowner that restricted permission to the owner 
    modifier onlyowner{
        // if the sender is not owner then don't run the nextline.
        require(owner == msg.sender);
        // _ means next() or continue
        _;
    }


}
