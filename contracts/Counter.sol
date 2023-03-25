// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Counter {
    string internal name;
    uint internal count;
    
    constructor(string memory _name,uint _count) {
        name = _name;
        count = _count;
    }
    //changers
    function increment() public returns(uint newCount){
        count++;
        return count;
    }
    function decrement() public returns(uint newCount){
        require(count > 0, 'can not set count less than 0');
        count--;
        return count;
    }
    //getters
    function getName() public view returns(string memory currentName){
        return name;
    }
    function getCount() public view returns(uint currentCount){
        return count;
    }
    //setters
    function setName(string memory newName) public returns(string memory currentName){
        name = newName;
        return name;
    }
    function setCount(uint newCount) public returns(uint currentCount){
        count = newCount;
        return count;
    }
}