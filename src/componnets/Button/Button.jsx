import "./Button.css";

export default function Button({symbol, digit, width, addDigit}) {
  return (
    <div className="button_wrapper" style={{width: width}} onClick={() => addDigit(digit)}>
      <img src={symbol} alt="Button Icon"/>
    </div>
  );
}