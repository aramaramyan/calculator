import trashIcon from "./../../icons/trash.svg";
import "./Output.css";

export default function Output({state, id, deleteCalc}) {
  return (
    <section className="output_wrapper">
      <div className="trash_icon" onClick={() => {
        deleteCalc(id);
      }}>
        <img src={trashIcon} alt="Trash Icon"/>
      </div>
      <div className="current_operand">
        <p>{state}</p>
      </div>
    </section>
  );
}