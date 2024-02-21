//----------------- Importing required libararies --------------------//
import { useEffect, useState } from 'react'
import axios from 'axios'
import Statistics from '../statistics/Statistics'
import BarChartComponent from '../barChart/BarChart'
import './transactions.css'

//------------------ Months Initialization ----------------------//
const months = [
    {
        name: "January" || "Jan",
    },
    {
        name: "February" || "Feb",
    },
    {
        name: "March" || "Mar",
    },
    {
        name: "April" || "Apr",
    },
    {
        name: "May" || "May",
    },
    {
        name: "June" || "Jun",
    },
    {
        name: "July" || "Jul",
    },
    {
        name: "August" || "Aug",
    },
    {
        name: "September" || "Sep",
    },
    {
        name: "October" || "Oct",
    },
    {
        name: "November" || "Nov",
    },
    {
        name: "December" || "Dec",
    },
]

//---------------------- Transactions function ------------------------//
const Transactions = () => {
    const [transactionList, setTransactionList] = useState([])
    const [selectedMonth, setSelectedMonth] = useState(months[2].name)
    const [searchInput, setSearchInput] = useState('')
    const [page, setPage] = useState(1)

    useEffect(()=>{
        const getTransactions = async () => {
            const list = await axios.get(`https://roxiler-backend-uslm.onrender.com/transactions?month=${selectedMonth}&page=${page}&search=${searchInput}&perPage=10`)
            if(list){
                console.log(list)
                setTransactionList(list.data.transactions)
            }
        }
        getTransactions()
    },[page, searchInput, selectedMonth])

    return(
        <>
            <div className='main-container'>
                <div className='first-container'>
                    <h3>Transaction Dashboard</h3>
                </div>
                <div className='second-container'>
                    <input value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} className='input-element' type="search" placeholder='Search transaction here...' />
                    <select  value={selectedMonth} onChange={(e)=> setSelectedMonth(e.target.value)} className='input-element'>
                        {months.map(o=> <option  className='selector-element' key={o.name} value={o.name}>{o.name} </option>)}
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price &#8377;</th>
                            <th>Category</th>
                            <th>Sold</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody className='tBody'>
                        {
                            transactionList.map((o)=>{
                                const {
                                    category,
                                    description,
                                    id,
                                    image,
                                    price,
                                    sold,
                                    title
                                } 
                                = o
                                return(
                                    <tr key={o.id} >
                                        <td>{id}</td>
                                        <td className="table-data">{title}</td>
                                        <td className="table-data">{description}</td>
                                        <td>{price}</td>
                                        <td className="table-data">{category}</td>
                                        <td>{sold}</td>
                                        <td>
                                            <img height={'100px'} className='product-image' src={image} alt="" />
                                        </td>
                                    </tr>
                                )
                            })
                        }              
                    </tbody>
                </table>
                <div className='last-container'>
                    <p>
                        Page No:{page}
                    </p>
                    <p>
                        <span onClick={()=> setPage(prevValue=> prevValue>1? prevValue-1: prevValue)} className='button'>Previous</span>
                        <span onClick={()=> setPage(prevValue=> prevValue+1)} className='button'> Next</span>     
                    </p>
                    <p>
                        Per Page: 10
                    </p>
                </div>
                <div className='statistics-container'></div>
                <div className='line'>
                    <hr/>
                </div>
            </div>
            <Statistics selectedMonth={selectedMonth} />
            <BarChartComponent  selectedMonth={selectedMonth} />
        </>
    )
}

export default Transactions;