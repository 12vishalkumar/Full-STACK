//--------------------------------- Importing required libararies ----------------------//
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import axios from 'axios';
import './barChart.css'


//----------------------------------- BarChartComponent function ----------------------//
const BarChartComponent = (props) => {
    const [barChartData, setBarChartData] = useState([]);
    const { selectedMonth } = props;

    useEffect(() => {
        const getBarChartData = async () => {
            try {
                const response = await axios.get(`https://roxiler-backend-uslm.onrender.com/bar-chart?month=${selectedMonth}`);
                setBarChartData(response.data);
            } catch (error) {
                console.error('Error fetching bar chart data:', error);
            }
        };
        getBarChartData();
    }, [selectedMonth]);

    const DataFormatter = (number) => {
        if (number > 1000) {
        return `${(number / 1000).toString()}k`;
        }
        return number.toString();
    };


    return (
        <div className='barchart-container'>
            <h2>Bar Chart Status - {selectedMonth}</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barChartData} margin={{ top: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="priceRange"
                        tick={{ stroke: '#3b3838', strokeWidth: 1 }}
                    />
                    <YAxis
                        tickFormatter={DataFormatter}
                        tick={{ stroke: '#3b3838', strokeWidth: 1 }}
                    />
                    <Legend wrapperStyle={{ padding: 30 }} />
                    <Bar dataKey="itemCount" name="Number of Items" fill="#37807e" barSize="20%" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartComponent;