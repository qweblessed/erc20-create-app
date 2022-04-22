//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BinanceUSD is ERC20,Ownable{
    constructor()ERC20("Binance USD", "BUSD"){

    }

    function mint(address _to,uint amount)public payable{
        _mint(_to,amount);
    }

    receive() external payable{

    }


}
