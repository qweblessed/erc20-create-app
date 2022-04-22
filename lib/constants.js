import dai from './Dai.json';
import usdt from './Tether.json';
import ust from './TerraUSD.json';
import busd from './BinanceUSD.json'
import ecr20create from './erc20Creator.json'

export const daiAbi =dai.abi;
export const usdtAbi =usdt.abi;
export const ustAbi =ust.abi;
export const busdAbi =busd.abi;
export const erc20Abi =ecr20create.abi;

export const erc20Bytecode = ecr20create.bytecode

export const busdAddress = "0x9FC659609477221f8431880a5890b95d28B8B468"
export const daiAddress = "0xADFB1c132490c1fA0F2f9535dB80c0815cCCE3f5"
export const terraUSDAddress = "0x8da2eA25213C4C865D1A78D2eE73C2959D76585d"
export const tetherAddress = "0x6F2695E3856d3292Af0BD15C70D2D27D8f36fE94"
export const erc20Address ="0x26d66EDeb6E5286D778A93C58855B4717BC2Cc1b"


