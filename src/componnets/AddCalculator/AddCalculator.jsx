import calcIcon from "./../../icons/calculator.svg";
import "./AddCalculator.css";

export default function AddCalculator({addCalc}) {
  return (
    <div className="addCalculator_wrapper" onClick={addCalc}>
      <img src={calcIcon} alt="Add Icon"/>
      <p>New Calculator</p>
    </div>
  );
}