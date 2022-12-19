import stocks from "../stock-data"
import { Link } from 'react-router-dom'

export default function DashboardPage(props) {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div>
                {stocks.map((stock) => {
                    const { name, symbol } = stock;

                    return (
                        <Link to={`/stocks/${symbol}`}>
                            <ul>
                                <li>{name}</li>
                            </ul>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}