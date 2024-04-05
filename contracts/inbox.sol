// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract hello_world{
    string public greeting;

    function setGreeting(string memory _greeting)public{
        greeting = _greeting;
    }

}