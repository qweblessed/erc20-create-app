import React, {useEffect, useState} from 'react'
import {useContext} from "react";
import {Context} from "../context/context";
import axios from "axios";



const buyTokens = () =>{
    const [amount, setAmount] = useState('')


    const {
        isAuthenticated,
        mint,
        setCoinSelect,
        coinSelect,
        toCoin,
        setToCoin,
    } = useContext(Context)



    return(
        <form className='flex items-center'>
            <div className='flex h-full w-full flex-col items-center'>
                <select
                    className='w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white`'
                    value={coinSelect}
                    onChange={e => setCoinSelect(e.target.value)}
                >
                    <option className='w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-black mt-6 text-white placeholder:text-white' value='ETH'>
                        ETH
                    </option>

                </select>
                <select
                    className='w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white`'
                    value={toCoin}
                    onChange={e => setToCoin(e.target.value)}
                >
                    <option className='w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-black mt-6 text-white placeholder:text-white' value='USDT'>
                        USDT
                    </option>
                    <option className='w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-black mt-6 text-white placeholder:text-white' value='DAI'>
                        DAI
                    </option>
                    <option className='w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-black mt-6 text-white placeholder:text-white' value='BUSD'>
                        BUSD
                    </option>
                    <option className='w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-black mt-6 text-white placeholder:text-white' value='UST'>
                        UST
                    </option>
                </select>
                <input
                    placeholder='Amount...'
                    className='w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white'
                    type='text'
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />

                <button
                    className='font-bold text-green-500 cursor-pointer mt-5'
                    type='button'
                    disabled={!isAuthenticated}
                    onClick={() => mint(amount)}
                >
                    Send
                </button>
            </div>
        </form>
    )
}

export default buyTokens
