//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract erc20Creator is ERC20,Ownable{

    constructor(string memory _name,string memory _symbol,uint initialAmount)ERC20(_name, _symbol){
        _mint(msg.sender,initialAmount*10**18);

    }

    receive() external payable{

    }


}
