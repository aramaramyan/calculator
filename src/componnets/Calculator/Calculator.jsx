import {useRef, useState} from "react";
import Calc from "../../scripts/calculator";
import Output from "../Output/Output";
import Buttons from "../Buttons/Buttons";
import "./Calculator.css";


export default function Calculator({id, deleteCalc}) {
  const calc = useRef(new Calc());
  const [state, setState] = useState({prev: calc.current.prev, current: calc.current.current, sign: calc.current.sign});

  function addDigit(num) {
   let current = calc.current.addDigit(num);
   setState(prev => ({ ...prev, current }))
  }

  function clear() {
    const state = calc.current.clear();
    setState({prev: state.prev, current: state.current, sign: state.sign});
  }

  function sum() {
    let result = calc.current.sum();
    setState({prev: result.prev, current: result.current, sign: result.sign})
  }

  function sub() {
    let result = calc.current.sub();
    setState({prev: result.prev, current: result.current, sign: result.sign});
  }

  function mul() {
    let result = calc.current.mul();
    setState({prev: result.prev, current: result.current, sign: result.sign});
  }

  function div() {
    let result = calc.current.div();
    setState({prev: result.prev, current: result.current, sign: result.sign});
  }

  function deleteDigit() {
    let result = calc.current.deleteDigit();
    setState({...state, current: result})
  }

  function plusMinus() {
    let result = calc.current.plusMinus();
    setState(prev => ({...prev, current: result}));
  }

  function equal() {
    let result = calc.current.equal();
    setState({prev: result.prev, current: result.current, sign: result.sign});
  }

  return (
    <div className="calculator_wrapper">
      <Output
        state={calc.current}
        id={id}
        deleteCalc={deleteCalc}
      />
      <Buttons
        addDigit={addDigit}
        clear={clear}
        sum={sum}
        sub={sub}
        mul={mul}
        div={div}
        equal={equal}
        plusMinus={plusMinus}
        deleteDigit={deleteDigit}
      />
    </div>
  );
}