import { Link } from "react-router-dom"

export default function Nav (props) {
    return(
        <div className="nav">
            <Link to="/">StockChecker</Link>
            <Link to="/stocks">Stocks</Link>
            <Link to="/about">About</Link>
        </div>
    )
}