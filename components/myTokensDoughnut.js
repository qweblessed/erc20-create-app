import React from 'react'
import {useContext} from "react";
import 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';
import {Context} from "../context/context";
import {formatUnits} from "ethers/lib/utils";
import Loader from "./Loader";


const myTokensDoughnut = () => {

    const {
        tokensOnAccount,
    } = useContext(Context)

    if (tokensOnAccount == ''){
        return (
            <div className="text-white"><Loader/></div>
        )
    }
    let labels = tokensOnAccount.map((i)=>{
        return i.name
    })

    let labels2 = tokensOnAccount.map((i)=>{
        return formatUnits(i.balance,18)
    })

    const data = {
        labels:labels,
        datasets: [
            {
                data: labels2,
                borderColor: 'black',
                borderWidth:2,
                fontSize:100,
                backgroundColor:['#0000FF','#DF0174','#01DF3A','#FF0000',
                '#DF013A','#00FFFF','#FFFF00','#8000FF'],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
                borderJoinStyle:'minter',
                weight:20,
                borderAlign:'center',
            },


        ]
    }
    const options = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size:20,
                    },
                    color:'white',
                }
            },
            title: {
                display: true,
                text: 'Your tokens portfolio',
                color: 'white',
                font: {
                    size: 60,
                },
                align: 'bottom',
                padding: {

                },
                responsive: true,
                animation: {
                    animateScale: true,
                },
            },

        },
        aspectRatio: 2,
    }

    return (
        <div className="p-8">
            <Doughnut data={data} options={options} className="text-white"/>
        </div>
    )


}
export default myTokensDoughnut