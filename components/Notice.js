import React from 'react'
import Link from 'next/link'
const styles = {


    noticeCTA: 'font-bold text-green-500 cursor-pointer mt-5',
}

const Notice = () =>{
    return(
        <div className='flex border border-[#30363b] mx-11 my-4 p-5 flex-col flex-1'>
            <div className='flex-1'>
                <div className='text-gray-500'>Create your own token</div>
                <div className='text-white font-bold'>
                    You can deploy it to Rinkeby network
                </div>
            </div>
            <Link href="/create-erc20">
                <a className='font-bold text-green-500 cursor-pointer mt-5'>Create your Token</a>
            </Link>
        </div>
    )
}

export default Notice