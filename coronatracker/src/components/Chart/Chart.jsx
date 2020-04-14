import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setdailyData] = useState({})

    useEffect(() => {
        const fetchAPI = async () => {
            setdailyData(await fetchDailyData());
        }
        
        console.log(dailyData);

        fetchAPI();
    });

    const lineChart = (
       dailyData[0] 
       ?(
       <Line
        data= {{
            labels: '', 
            datasets: [{}, {}], 
             }} 
       />) : null
    );

    return (
        <h1>Chart component</h1>
    )
}



export default Chart;