import './App.css'
import Rows from "./components/Row/Rows"
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Sign from './pages/Sign/Sign'
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </Router>

    </div>
  );
}


export default App;
