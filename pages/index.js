import Header from "../components/Header";
import PortfolioChart from '../components/PortfolioChart'
import BuyTokens  from "../components/BuyTokens";
import Notice from '../components/Notice'
import Assets from "../components/Assets";
import axios from "axios";
import React, {useState,useContext} from "react";
import Marquee from "react-double-marquee";
import {Context} from "../context/context";

export default function Home({coins}) {
  if (!coins){
    return <Loader/>
  }
  const  {
    setCostInEth
  }= useContext(Context);

  const [myCoins] = useState([...coins.slice(0, 30)])
  setCostInEth(myCoins[1].price)
  return (
    <div className='w-screen h-screen flex flex-col'>
        <div
            style={{
              width: 'w-4/5',
              whiteSpace: 'nowrap',
            }}
            className="text-white text-6xl pt-20 "
        >
          <Marquee >
            {myCoins.map((i)=>{
              return (<a className='text-white tracking-wider' key={i.symbol}>
                <span className={i.change>0?'text-[#00ff1a]':'text-[#ef4b09]'}>{i.symbol}{i.change>0?' +':' '}{i.change}%</span>/
              </a>)
            })}
          </Marquee>
        </div>
      <Header/>
      <div className='w-2/3 h-full m-auto flex mt-16'>
        <div className='flex flex-col w-3/4 h-full  p-6 overflow-y-scroll'>
        <div className='flex flex-col '>
          <div className='text-white text-4xl'>Latest 24h BTC update</div>
          <div className='text-white font-bold text-sm'>
          </div>
        </div>
        <div>
          <div className='text-5xl flex justify-center w-full h-1/3 text-white mt-11 mb-11'>
            <PortfolioChart coinsProps={coins}/>
          </div>
        </div>
        <div className='w-full border-t mb-24 border-b h-16 border-[#30363b] flex justify-between items-center p-4'>
          <div className='text-white font-bolder text-lg'>Buying Power</div>
          <div className='text-white font-bolder text-xl'>12 Eth</div>
        </div>
        <div className='flex border border-[#30363b] mx-11 my-4 p-5 flex-col flex-1'>
          <div className='flex-1'></div>
          <div className='text-gray-500'>Swap your coins</div>
          <div className='text-white font-bold'>Exchange ETH on stablecoins </div>
          <BuyTokens />
        </div>
        <Notice/>
      </div>
        <div className='flex flex-col flex-1 h-4/5 bg-[#1E2123] mt-6 rounded-lg overflow-y-scroll noScroll'>
          <div className='flex items-center text-white p-5 border-b border-[#30363b]'>
             <div className='flex-1 font-bold text-center text-white'>CryptoCurrencies</div>
          </div>
          {myCoins.map(coin => {
            let price = parseFloat(coin.price)
            price = price.toFixed(2)

            return <Assets key={coin.uuid} coin={coin} price={price} />
          })}


          <div className='flex items-center text-white p-5 border-b border-[#30363b]'>
              <div className='flex-1 font-bold text-center text-white'>List</div>
          </div>
        </div>
      </div>
    </div>
  )
}



export const getStaticProps = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.coinranking.com/v2/coins',//.env
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      tiers: '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0',
    },
    headers: {
      'x-access-token': 'coinranking0d3d5d339aec202c8e0224945cdea9c2d9bbb0733517c6af'//.env
    },
  }

  const res = await axios.request(options)
  const coins = res.data.data.coins

  return {
    props: { coins },
  }
}