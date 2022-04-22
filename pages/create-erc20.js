import React, {useContext} from 'react'
import {useState} from "react";
import Header from "../components/Header";
import {Context} from "../context/context";


export default function func () {

    const {
        creation,
    } = useContext(Context)

    const  [tokenName,setTokenName] = useState('');
    const  [tokenSymbol,setTokenSymbol] = useState('');
    const  [initialSupply,setInitialSupply] = useState('');

    const getTokenName = (event)=>{
        setTokenName(event.target.value)
    };

    const getInitialSupply =(event) =>{
        setInitialSupply(event.target.value)
    }

    const getTokenSymbol = (event)=>{
        setTokenSymbol(event.target.value);
    };

    return(
        <div className="d-flex">
             <Header/>
            <div className="text-center pt-20 text-white h-14 ">
                    <div className="px-6 py-4 pt-20 bg-gradient-to-r from-black-500 to-blue-500] text-2xl pb-34" >
                        Create your OWN Token
                    </div>
                <div className="inline-block relative w-64 text-black">
                    <select
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option>Rinkeby network</option>

                    </select>
                </div>
            </div>
            <div className="text-white pt-36">
                <div className="flex justify-center ">
                    <form className="w-full max-w-lg pt-10">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                                       htmlFor="grid-first-name">
                                    Token Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="text" onChange={getTokenSymbol}/>

                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                                       htmlFor="grid-last-name">
                                    Token Symbol
                                </label>
                                <input
                                    className = "appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="" id="" onChange={getTokenName}
                                    id="grid-last-name" type="text" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                                       htmlFor="grid-password">
                                    Initial supply on your account
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                     placeholder="100000" onChange={getInitialSupply}/>
                            </div>
                        </div>
                            <button className="bg-green-500	 hover:bg-green-400 text-white font-bold py-2 px-4 rounded" type='button' onClick={()=>creation(tokenName,tokenSymbol,initialSupply)}>Deploy</button>

                    </form>
                </div>
            </div>
        </div>
    )
}