const {ethers} = require('hardhat')

const main = async () =>{
    const busdFactory = await ethers.getContractFactory('BinanceUSD')
    const busdContract = await busdFactory.deploy();
    await busdContract.deployed();
    console.log('busd contract deployed to:',busdContract.address)

    const DaiFactory = await ethers.getContractFactory('Dai')
    const DaiContract = await DaiFactory.deploy();
    await DaiContract.deployed();
    console.log('Dai contract deployed to:',DaiContract.address)

    const TerraUSDFactory = await ethers.getContractFactory('TerraUSD')
    const TerraUSDContract = await TerraUSDFactory.deploy();
    await TerraUSDContract.deployed();
    console.log('TerraUSD contract deployed to:',TerraUSDContract.address)

    const TetherFactory = await ethers.getContractFactory('Tether')
    const TetherContract = await TetherFactory.deploy();
    await TetherContract.deployed();
    console.log('Tether contract deployed to:',TetherContract.address)

    const erc20Create = await ethers.getContractFactory('MyTokenUpgradeable');
    const erc20Contract = await erc20Create.deploy();
    await erc20Contract.deployed();
    console.log('token creator deployed to',erc20Contract.address)
}

;(async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
})()