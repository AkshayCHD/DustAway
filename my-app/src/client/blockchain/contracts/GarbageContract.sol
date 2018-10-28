pragma solidity ^0.4.24;

import "./GarCoin.sol";

contract GarbageContract {
    uint amount = 0;
    address admin;
    GarCoin public tokenContract;
    uint256 public tokenPrice; // in wei

    event Sell(address _buyer, uint256 _amount);

    constructor (GarCoin _tokenContract, uint256 _tokenPrice) public {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    function transferMoney(uint _numberOfTokens) public returns(bool){
        tokenContract.assignAmount(msg.sender, this, _numberOfTokens);
        return true;
    }

    function transferFromContract(uint _value) public returns(bool){
        tokenContract.transfer(msg.sender, _value);
    }

    function transferFromAddress(uint _value, address _to) public returns(bool){
        tokenContract.transfer(_to, _value);
    }

    function getBalance() public view returns(uint){
        return tokenContract.balanceOf(msg.sender);
    }

    function buyTokens(uint256 _numberOfTokens) public returns(bool){
        tokenContract.assignAmount(admin, this, _numberOfTokens);
        return true;
    }

    function addEther() public payable returns(bool) {
        amount += msg.value;
        return true;
    }

    function sendEther(uint Samount) public payable {
        tx.origin.transfer(Samount);
        amount -= Samount;
    }   

    function getAmount() public view returns(uint) {
        return amount;
    }

    function getAddress() public view returns(address){
        return tokenContract.getAddress();
    }
}
