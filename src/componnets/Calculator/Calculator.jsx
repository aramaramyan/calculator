import Calc from "../../scripts/calculator";
import "./Calculator.css";
import Output from "../Output/Output";
import Buttons from "../Buttons/Buttons";

export default function Calculator() {
  const calc = new Calc();
  console.log(calc)

  return (
    <div className="calculator_wrapper">
      <Output />

      <Buttons />
    </div>
  );
}