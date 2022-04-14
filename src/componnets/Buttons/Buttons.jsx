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

export default function Buttons({addDigit, clear}) {
  return (
    <section className="buttons_wrapper">
      <div className="row">
        <Button symbol={cIcon}  />
        <Button symbol={deleteIcon} />
        <Button symbol={plusMinusIcon}/>
        <Button symbol={divideIcon}/>
      </div>
      <div className="row">
        <Button symbol={Icon_7} digit={7} addDigit={addDigit}/>
        <Button symbol={Icon_8} digit={8} addDigit={addDigit}/>
        <Button symbol={Icon_9} digit={9} addDigit={addDigit}/>
        <Button symbol={mulIcon}/>
      </div>
      <div className="row">
        <Button symbol={Icon_4} digit={4} addDigit={addDigit}/>
        <Button symbol={Icon_5} digit={5} addDigit={addDigit}/>
        <Button symbol={Icon_6} digit={6} addDigit={addDigit}/>
        <Button symbol={minusIcon}/>
      </div>
      <div className="row">
        <Button symbol={Icon_1} digit={1} addDigit={addDigit}/>
        <Button symbol={Icon_2} digit={2} addDigit={addDigit}/>
        <Button symbol={Icon_3} digit={3} addDigit={addDigit}/>
        <Button symbol={plusIcon}/>
      </div>
      <div className="row">
        <Button symbol={Icon_0} width="110px" digit={0} addDigit={addDigit}/>
        <Button symbol={dotIcon}/>
        <Button symbol={equalIcon}/>
      </div>
    </section>
  );
}