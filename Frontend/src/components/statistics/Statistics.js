//---------------------- Importing required libararies ---------------------//
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './statistics.css'

//---------------------- Statistics function ------------------------//
const Statistics = (props) => {
  const [statistics, setStatistics] = useState({});
  const {selectedMonth} = props

  useEffect(() => {
    const getStatistics = async () => {
      const statistics = await axios.get(`https://roxiler-backend-uslm.onrender.com/statistics/?month=${selectedMonth}`)
      setStatistics(statistics.data) 
    }
    getStatistics() 
  }, [selectedMonth]);

  return (
    <div className='statistics-main-container'>
        <h2>Statistics - {selectedMonth}</h2>
        <div className='statitics-container'>
            <div className='element'>
              <span>Total Selling Price:</span> 
              <span>&#8377;{statistics.totalSaleAmount}</span>
            </div>
            <div className='element'><span>Total Sold Items:</span> <span>{statistics.totalSoldItems}</span></div>
            <div className='element'><span>Total Not Sold Items:</span> <span>{statistics.totalNotSoldItems}</span></div>
        </div>
    </div>
  );
};

export default Statistics;