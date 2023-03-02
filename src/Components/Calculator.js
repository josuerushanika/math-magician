import React, { useState } from 'react';
import calculate from '../logic/calculate';

function AppCalculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const clickHandler = (e) => {
    setState((state) => calculate(state, e.target.name));
  };

  return (
    <div className="maincalculator">

      <div className="showscreen">
        {state.total}
        {state.operation}
        {state.next}
      </div>

      <div className="symbole">
        <button onClick={clickHandler} name="AC" type="button">AC</button>
        <button type="button" name="+/-" onClick={clickHandler}>+/-</button>
        <button type="button" name="%" onClick={clickHandler}>%</button>
        <button type="button" name="÷" className="operationsign" onClick={clickHandler}> ÷ </button>
      </div>

      <div className="symbole">
        <button type="button" name="7" onClick={clickHandler}>7</button>
        <button type="button" name="8" onClick={clickHandler}>8</button>
        <button type="button" name="9" onClick={clickHandler}>9</button>
        <button type="button" name="x" onClick={clickHandler} className="operationsign">X</button>
      </div>

      <div className="symbole">
        <button type="button" name="6" onClick={clickHandler}>6</button>
        <button type="button" name="5" onClick={clickHandler}>5</button>
        <button type="button" name="4" onClick={clickHandler}>4</button>
        <button type="button" name="-" onClick={clickHandler} className="operationsign"> - </button>
      </div>

      <div className="symbole">
        <button type="button" name="3" onClick={clickHandler}>3</button>
        <button type="button" name="2" onClick={clickHandler}>2</button>
        <button type="button" name="1" onClick={clickHandler}>1</button>
        <button type="button" name="+" onClick={clickHandler} className="operationsign"> + </button>
      </div>

      <div className="symbole">
        <button type="button" className="zero" name="0" onClick={clickHandler}>0</button>
        <button type="button" className="dot" name="." onClick={clickHandler}>.</button>
        <button type="button" className="operationsign" name="=" onClick={clickHandler}>=</button>
      </div>

    </div>
  );
}

export default AppCalculator;
