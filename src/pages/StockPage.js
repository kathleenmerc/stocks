import stocks from "../stock-data"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function StockPage(props) {
    const [stock, setStock] = useState(null)
    const { symbol } = useParams()

    const getStock = async () => {
        try {
            const stock = stocks.find(eachStock => eachStock.symbol === symbol)
            setStock(stock)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getStock()
    }, [])

    const loaded = () => {
        return(
            <div className="stocks">
                <h1>{stock.name} ({stock.symbol})</h1>
                <ul>
                    <li>Price: {stock.lastPrice}</li>
                    <li>Change: {stock.change}</li>
                    <li>High: {stock.high}</li>
                    <li>Low: {stock.low}</li>
                    <li>Open: {stock.open}</li>
                </ul>
            </div>
        )
    }

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }

    return(
        stock ? loaded() : loading()
    )

}