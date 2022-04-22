import {createContext, useEffect, useState} from "react";
import {useMoralis} from "react-moralis";
import {
    daiAbi,
    usdtAbi,
    ustAbi,
    busdAbi,
    busdAddress,
    daiAddress,
    terraUSDAddress,
    tetherAddress, erc20Abi, erc20Bytecode
} from "../lib/constants";
import axios from "axios";
import Web3Modal from "web3modal";
import {ethers} from "ethers";

export const Context = createContext()

export const ContextProvider = ({children}) => {

    const [currentAccount, setCurrentAccount] = useState('')
    const [formattedAccount, setFormattedAccount] = useState('')
    const [coinSelect, setCoinSelect] = useState('ETH')
    const [balance, setBalance] = useState('')
    const [tokensOnAccount,setTokensOnAccount] = useState('unset')
    const { isAuthenticated, authenticate, user, logout, Moralis, enableWeb3 } =
        useMoralis()
    const [currentTokenChart,setCurrentTokenChart] = useState(' ')
    const [toCoin, setToCoin] = useState('USDT')
    const [costInEth,setCostInEth] = useState('')

    useEffect(() =>{
        (async()=>{

        if (isAuthenticated) {

            const account = user.get('ethAddress')
            let formatAccount = account.slice(0, 4) + '...' + account.slice(-4)
            setFormattedAccount(formatAccount)
            setCurrentAccount(account)
            const currentBalance = await Moralis.Web3API.account.getNativeBalance({
                chain: 'rinkeby',
                address: currentAccount,
            })
            const balanceToEth = Moralis.Units.FromWei(currentBalance.balance)
            const formattedBalance = parseFloat(balanceToEth).toFixed(3)
            setBalance(formattedBalance)
            setTokensOnAccount(await Moralis.Web3API.account.getTokenBalances({
                chain: 'rinkeby',
                address: currentAccount}))
        }})()
    }, [isAuthenticated, enableWeb3])

    useEffect(() => {

        if (!currentAccount) return
            ;(async () => {
            const response = await fetch('/api/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    walletAddress: currentAccount,
                }),
            })
            setTokensOnAccount(await Moralis.Web3API.account.getTokenBalances({
                chain: 'rinkeby',
                address: currentAccount}))
            const data = await response.json()
        })()
    }, [currentAccount])


    const mint = async (amount) => {
        try {
            if (coinSelect === 'ETH') {
                if (!isAuthenticated) return
                await Moralis.enableWeb3()
                const contractAddress = getToAddress()
                const abi = getToAbi()
                let cost = amount/costInEth
                let options = {
                    contractAddress: contractAddress,
                    functionName: 'mint',
                    abi: abi,
                    params: {
                        _to: currentAccount,
                        amount: Moralis.Units.Token(amount, '18'),//
                    },
                }
                sendEth(cost)
                const transaction = await Moralis.executeFunction(options)
                const receipt = await transaction.wait(4)
                console.log(receipt)
                saveTransaction(receipt.transactionHash, amount, receipt.to)
            }
        } catch (error) {
            console.error(error.message)
        }
    }



    //Send eth function
    const sendEth = async (cost) => {
        console.log(cost)
        console.log(cost.toFixed(18))
        if (!isAuthenticated) return
        const contractAddress = getToAddress()

        let options = {
            type: 'native',
            amount: Moralis.Units.ETH(cost.toFixed(18)),//VALUE
            receiver: contractAddress,
        }
        const transaction = await Moralis.transfer(options)
        const receipt = await transaction.wait()
        console.log(receipt)
        saveTransaction(receipt.transactionHash, cost, receipt.to)
    }

    const saveTransaction = async (txHash, amount, toAddress) => {
        await fetch('/api/swapTokens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                txHash: txHash,
                from: currentAccount,
                to: toAddress,
                amount: parseFloat(amount),
            }),
        })
    }

    const getContractAddress = () => {
        if (coinSelect === 'USDT') return tetherAddress
        if (coinSelect === 'DAI') return daiAddress
        if (coinSelect === 'BUSD') return busdAddress
        if (coinSelect === 'UST') return terraUSDAddress
    }


    const getToAddress = () => {
        if (toCoin === 'USDT') return tetherAddress
        if (toCoin === 'DAI') return daiAddress
        if (toCoin === 'BUSD') return busdAddress
        if (toCoin === 'UST') return terraUSDAddress
    }

    const getToAbi = () => {
        if (toCoin === 'USDT') return usdtAbi
        if (toCoin === 'DAI') return daiAbi
        if (toCoin === 'BUSD') return busdAbi
        if (toCoin === 'UST') return ustAbi
    }
    const connectWallet = () => {
        authenticate()
    }

    const signOut = () => {
        console.log('Logged out')
        logout()
    }

    const creation = async (name,symbol,initialSupply) =>{
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        let contract = new ethers.ContractFactory(erc20Abi,erc20Bytecode,signer)
        let c = await contract.deploy(name,symbol,initialSupply)
        await c.deployed();
    }

    return(
        <Context.Provider
        value={{
            connectWallet,
            signOut,
            currentAccount,
            isAuthenticated,
            formattedAccount,
            mint,
            setCoinSelect,
            coinSelect,
            balance,
            tokensOnAccount,
            setCurrentTokenChart,
            currentTokenChart,
            creation,
            toCoin,
            setToCoin,
            setCostInEth,
        }}>
            {children}
        </Context.Provider>
    )
}

export const getStaticProps2 = async () => {
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