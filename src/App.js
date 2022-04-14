import {useState} from "react";
import Calculator from "./componnets/Calculator/Calculator";
import AddCalculator from "./componnets/AddCalculator/AddCalculator";
import uniqueID from "./componnets/helpers/uniqueID";
import './App.css';

function App() {
  const [state, setState] = useState([]);

  function addCalc() {
    setState(prev => [...prev, uniqueID()]);
  }

  function deleteCalc(id) {
    const filtered = state.filter(item => item !== id);
    setState(filtered);
  }

  return (
    <div className="App">
      {state.map(item => (
        <Calculator
        key={item}
        id={item}
        deleteCalc={deleteCalc}
        />))}
      <AddCalculator addCalc={addCalc}/>
    </div>
  );
}

export default App;
