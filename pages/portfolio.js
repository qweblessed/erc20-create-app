import React, {useContext, useEffect} from 'react'
import MyTokensDoughnut from "../components/myTokensDoughnut";
import Header from '../components/Header'
import {Context} from "../context/context";
import {formatUnits} from "ethers/lib/utils";
import Loader from "../components/Loader";
import Link from 'next/link'

const PortfolioChart2 = () => {
    const {
        tokensOnAccount,
    } = useContext(Context)

    if(tokensOnAccount == 'unset'){
        return <div className="text-white text-xl text-center mt-20">
            <Loader/>
            <p>U dont have coins on ur account go/or they have not uploaded yet,go to</p>
            <Link href="/" >
                <a className='cursor-pointer font-bold hover:text-green-500 duration-300'> Home Page</a>
            </Link>
             <p>or create your own tokens</p>
            <Link href="/create-erc20" >
                <a className='cursor-pointer font-bold hover:text-green-500 duration-300'>Create Token</a>
            </Link>
            <p>or simply reload the page</p>
        </div>
    }
    if (tokensOnAccount.length ==0){
        return <div className="text-white text-xl text-center mt-20">
            <Loader/>
            <p>U dont have coins on ur account go/or they have not uploaded yet,go to</p>
            <Link href="/" >
                <a className='cursor-pointer font-bold hover:text-green-500 duration-300'> Home Page</a>
            </Link>
            <p>or create your own tokens</p>
            <Link href="/create-erc20" >
                <a className='cursor-pointer font-bold hover:text-green-500 duration-300'>Create Token</a>
            </Link>
            <p>or simply reload the page</p>
        </div>
    }


    return (
        <div>
            <Header/>
            <div className="pt-20">
                <MyTokensDoughnut/>
            </div>
            <div className="flex justify-center pt-20">
                <table className="table-auto text-white mb-20 text-2xl">
                    <thead>
                    <tr>
                        <th >Symbol</th>
                        <th>Name</th>
                        <th >Amount</th>
                        <th>Token Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tokensOnAccount.map((i)=>{
                        return <tr key={i.name}>
                            <td >{i.symbol}</td>
                            <td >{i.name}</td>
                            <td>{formatUnits(i.balance,18).length>10?
                            i.balance.slice(0, 4) + '+':
                                formatUnits(i.balance,18)}
                            </td>
                            <td>{i.token_address}</td>
                        </tr>
                    })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )


}
export default PortfolioChart2