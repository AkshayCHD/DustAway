pragma solidity ^0.4.24;

contract GarbageContract {
    uint amount = 0;

    function addEther() public payable returns(bool) {
        amount+=msg.value;
        return true;
    }

    function sendEther(uint Samount) public payable {
        tx.origin.transfer(Samount);
        amount-=Samount;
    }

    function getAmount() public view returns(uint) {
        return amount;
    }
}
