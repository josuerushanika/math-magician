import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import './Calculator.css';
// pages
// import AppCalculator from './Components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import CalculatorPage from './pages/CalculatorPage';

function App() {
  return (
    <BrowserRouter>

      <header>
        <nav>
          <h1>Math Magicians</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/CalculatorPage">Calculator</NavLink>
          <NavLink to="/Quote">Quote</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/CalculatorPage" element={<CalculatorPage />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
