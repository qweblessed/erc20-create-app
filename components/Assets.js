import React from 'react'
import { Line } from 'react-chartjs-2'
import {useContext} from "react";
import {Context} from "../context/context";

const Assets = ({coin,price}) => {
    let {setCurrentTokenChart}=useContext(Context)

    const setGraphColor = () => {
        if (coin.change < 0) {
            return '#ef4b09'
        } else {
            return '#00ff1a'
        }
    }

    const data = {
        labels: ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        datasets: [
            {
                fill: false,
                lineTension: 0.01,
                backgroundColor: setGraphColor(),
                borderColor: setGraphColor(),
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: setGraphColor(),
                pointBackgroundColor: setGraphColor(),
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: setGraphColor(),
                pointHoverBorderColor: setGraphColor(),
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: coin.sparkline.map((i)=>{
                    return i}),
            },
        ],
    }

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
    }

    return(
        <div className='flex justify-between p-5  hover:bg-[#30363B] duration-300'  onClick={()=>setCurrentTokenChart(coin)} type={"button"}>
            <div className='flex flex-col text-white items-center justify-center'>
                <div className='font-bold'>{coin.symbol}</div>
            </div>
            <div>
                <div className='w-36 h-full'>
                    <Line data={data} options={options} width={400} height={150} />
                </div>
            </div>
            <div className='flex flex-col text-white'>
                <div>{price}</div>
                <div
                    className='text-green-400'
                    style={{ color: coin.change < 0 ? '#ef4b09' : 'green' }}
                >
                    {coin.change}%
                </div>
            </div>
        </div>
    )
}

export default Assets