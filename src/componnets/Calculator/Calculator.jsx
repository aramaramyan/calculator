import {useRef, useState} from "react";
import Calc from "../../scripts/calculator";
import Output from "../Output/Output";
import Buttons from "../Buttons/Buttons";
import "./Calculator.css";


export default function Calculator({id, deleteCalc}) {
  const calc = useRef(new Calc());
  const [state, setState] = useState({prev: calc.current.prev, current: calc.current.current});
  console.log("Calculator.jsx", calc.current.current);

  function addDigit(num) {
   let current = calc.current.addDigit(num);
   setState(prev => ({ ...prev, current }))
  }

  function clear() {
    const state = calc.current.clear();
    setState({prev: state.prev, current: state.current});
  }

  function sum() {
    let result = calc.current.sum();
    console.log("sum()", result);
    setState({prev: result.prev, current: result.current})
  }

  return (
    <div className="calculator_wrapper">
      <Output
        state={calc.current.current}
        id={id}
        deleteCalc={deleteCalc}
      />
      <Buttons
        addDigit={addDigit}
        clear={clear}
        sum={sum}
      />
    </div>
  );
}