import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import './Calculator.css';
// pages
import Home from './pages/Home';
import Quote from './pages/Quote';
import CalculatorPage from './pages/CalculatorPage';

function App() {
  return (
    <BrowserRouter>

      <header>
        <h1>Math Magicians</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <span>|</span>
          <NavLink to="/CalculatorPage">Calculator</NavLink>
          <span>|</span>
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
