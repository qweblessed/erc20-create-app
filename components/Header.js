import React, {useContext} from 'react'
import {Context} from "../context/context";
import Link from 'next/link'



const Header = () =>{
    const{
        connectWallet,
        signOut,
        currentAccount,
        isAuthenticated,
        formattedAccount,
        balance
    } = useContext(Context)

    return(
        <div className='flex w-screen h-16 bg-black px-24 py-3 mb-5 fixed'>

            <div className='flex flex-1'>
                <div className="cursor-pointer text-2xl text-white font-bold hover:text-green-500 duration-500">
                    <Link href="/">
                        <a >
                            ERC20 Create App
                        </a>
                    </Link>
                </div>
            </div>
            <div className='flex flex-1 '>
                <div className='text-white'>
                        <div className='cursor-pointer font-bold hover:text-green-500 duration-300'>Your Balance: {balance} ETH</div>
                </div>
            </div>
            <div className='flex items-center justify-end text-white gap-8'>
                <Link href="/">
                    <a className='cursor-pointer font-bold hover:text-green-500 duration-300'>
                        Home Page
                    </a>
                </Link>
                <Link href="/create-erc20">
                    <a className='cursor-pointer font-bold hover:text-green-500 duration-300'>
                        Create ERC20
                    </a>
                </Link>

                <Link href="/portfolio">
                    <a className='cursor-pointer font-bold hover:text-green-500 duration-300'>
                        Portfolio
                    </a>
                </Link>

                {isAuthenticated && (
                    <>
                        <div className='cursor-pointer font-bold hover:text-green-500 duration-300'>
                            {formattedAccount}
                        </div>
                        <div className='cursor-pointer font-bold hover:text-green-500 duration-300' onClick={() => signOut()}>
                            Logout
                        </div>
                    </>
                )}

                {!isAuthenticated && (
                    <div className='cursor-pointer font-bold hover:text-green-500 duration-300' onClick={() => connectWallet()}>
                        Login
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header