import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import StockPage from './pages/StockPage';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stocks/:symbol" element={<StockPage />} />
        <Route path="stocks" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
