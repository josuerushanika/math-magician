import React, { useState } from 'react';
import CalculatorSign from './Calulatorsign';

function AppCalculator() {
  const [current, setCurrent] = useState('');

  const appendValue = (el) => {
    const value = el.target.getAttribute('data');

    if (value === '.' && current.includes('.')) return;
    setCurrent(current + value);
  };

  return (
    <div className="maincalculator">

      <div className="showscreen">
        <p>{current}</p>
      </div>

      <CalculatorSign />

      <div className="symbole">
        <button type="button" data="7" onClick={appendValue}>7</button>
        <button type="button" data="8" onClick={appendValue}>8</button>
        <button type="button" data="9" onClick={appendValue}>9</button>
        <button type="button" className="operationsign">X</button>
      </div>

      <div className="symbole">
        <button type="button" data="6" onClick={appendValue}>6</button>
        <button type="button" data="5" onClick={appendValue}>5</button>
        <button type="button" data="4" onClick={appendValue}>4</button>
        <button type="button" className="operationsign"> - </button>
      </div>

      <div className="symbole">
        <button type="button" data="3" onClick={appendValue}>3</button>
        <button type="button" data="2" onClick={appendValue}>2</button>
        <button type="button" data="1" onClick={appendValue}>1</button>
        <button type="button" className="operationsign"> + </button>
      </div>

      <div className="symbole">
        <button type="button" className="zero" data="0" onClick={appendValue}>0</button>
        <button type="button" className="dot" data="." onClick={appendValue}>.</button>
        <button type="button" className="operationsign">=</button>
      </div>

    </div>
  );
}

export default AppCalculator;
