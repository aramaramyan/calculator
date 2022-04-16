import Icon_0 from "./../../icons/0.svg"
import Icon_1 from "./../../icons/1.svg"
import Icon_2 from "./../../icons/2.svg"
import Icon_3 from "./../../icons/3.svg"
import Icon_4 from "./../../icons/4.svg"
import Icon_5 from "./../../icons/5.svg"
import Icon_6 from "./../../icons/6.svg"
import Icon_7 from "./../../icons/7.svg"
import Icon_8 from "./../../icons/8.svg"
import Icon_9 from "./../../icons/9.svg"
import plusIcon from "./../../icons/plus.svg"
import minusIcon from "./../../icons/minus.svg"
import mulIcon from "./../../icons/mul.svg"
import divideIcon from "./../../icons/divide.svg"
import plusMinusIcon from "./../../icons/plus-minus.svg";
import cIcon from "./../../icons/C.svg"
import deleteIcon from "./../../icons/delete.svg";
import equalIcon from "./../../icons/equals.svg";
import dotIcon from "./../../icons/dot.svg";
import "./Buttons.css";
import Button from "../Button/Button";

export default function Buttons({addDigit, clear, sum, sub, mul, div, equal, deleteDigit}) {
  return (
    <section className="buttons_wrapper">
      <div className="row">
        <Button symbol={cIcon}  action={clear}/>
        <Button symbol={deleteIcon} action={deleteDigit}/>
        <Button symbol={plusMinusIcon}/>
        <Button symbol={divideIcon} action={div}/>
      </div>
      <div className="row">
        <Button symbol={Icon_7} digit={7} action={addDigit}/>
        <Button symbol={Icon_8} digit={8} action={addDigit}/>
        <Button symbol={Icon_9} digit={9} action={addDigit}/>
        <Button symbol={mulIcon} action={mul}/>
      </div>
      <div className="row">
        <Button symbol={Icon_4} digit={4} action={addDigit}/>
        <Button symbol={Icon_5} digit={5} action={addDigit}/>
        <Button symbol={Icon_6} digit={6} action={addDigit}/>
        <Button symbol={minusIcon} action={sub}/>
      </div>
      <div className="row">
        <Button symbol={Icon_1} digit={1} action={addDigit}/>
        <Button symbol={Icon_2} digit={2} action={addDigit}/>
        <Button symbol={Icon_3} digit={3} action={addDigit}/>
        <Button symbol={plusIcon} action={sum}/>
      </div>
      <div className="row">
        <Button symbol={Icon_0} width="110px" digit={0} action={addDigit}/>
        <Button symbol={dotIcon} digit="." action={addDigit}/>
        <Button symbol={equalIcon} action={equal}/>
      </div>
    </section>
  );
}