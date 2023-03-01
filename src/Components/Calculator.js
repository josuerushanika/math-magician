import React from 'react';
import CalculatorSign from './Calulatorsign';

const AppCalculator = () => (
  <div className="maincalculator">

    <div className="showscreen">
      <p>0</p>
    </div>

    <CalculatorSign />

    <div className="symbole">
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="operationsign">X</button>
    </div>

    <div className="symbole">
      <button type="button">6</button>
      <button type="button">5</button>
      <button type="button">4</button>
      <button type="button" className="operationsign"> - </button>
    </div>

    <div className="symbole">
      <button type="button">3</button>
      <button type="button">2</button>
      <button type="button">1</button>
      <button type="button" className="operationsign"> + </button>
    </div>

    <div className="symbole">
      <button type="button" className="zero">0</button>
      <button type="button" className="dot">.</button>
      <button type="button" className="operationsign">=</button>
    </div>

  </div>
);

export default AppCalculator;
