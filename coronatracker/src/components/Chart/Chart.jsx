import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';

const Chart = () => {
    const [dailyData, setdailyData] = useState({})

    useEffect(() => {
        const fetchAPI = async () => {
            setdailyData(await fetchDailyData());
        }

        fetchAPI();
    });
    return (
        <h1>Chart component</h1>
    )
}



export default Chart;