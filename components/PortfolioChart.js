import { Line } from 'react-chartjs-2'
import {useContext} from "react";
import Chart from 'chart.js/auto'
import {Context} from "../context/context";


const PortfolioChart = (coins) => {
const {currentTokenChart} = useContext(Context)

    const data = {
        labels: [
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '07:00',
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00',
            '23:00',
            '24:00',

        ],
        datasets: [
            {
                fill: false,
                lineTension: 0.01,
                backgroundColor: '#00ff1a',
                borderColor: '#00ff1a',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#00ff1a',
                pointBackgroundColor: '#00ff1a',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#00ff1a',
                pointHoverBorderColor: '#00ff1a',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data:currentTokenChart==' '?coins.coinsProps[0].sparkline.map((i)=>{
                    return Math.floor(i)}):
                    currentTokenChart.sparkline.map((i)=>{return i})



                   ,
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


    return <Line data={data} options={options} width={400} height={150} />
}

export default PortfolioChart