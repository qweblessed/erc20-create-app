import abi from '../artifacts/contracts/createErc20.sol/CreateERC20.json'
const { expect } = require("chai");
const { ethers } = require("ethers");

export async function deployFunc (name,symb){
  const Erc20Creator = await ethers.getContractFactory(abi.abi,abi.bytecode,'76c7ed9f19562992ffcce10d1ac5e153cf6649fef21749565727b22dc8822167');
  const erc20Creator = await Erc20Creator.deploy(name,symb);
  await erc20Creator.deployed();

}

