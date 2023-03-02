import React from 'react';
// import handleDelete from CalculatorSign.js;
// import AppCalculator from './Calculator';

const handleDelete = () => {
  setCurrent(String(current).slice(0, -1));
};

const CalculatorSign = () => (
  <div className="symbole">
    <button onClick={handleDelete} type="button">AC</button>
    <button type="button">+/-</button>
    <button type="button">%</button>
    <button type="button" className="operationsign"> ÷ </button>
  </div>
);

export default CalculatorSign;
