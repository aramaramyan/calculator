import "./Button.css";

export default function Button({symbol, digit, width, action}) {
  return (
    <div className="button_wrapper" style={{width: width}} onClick={() => action(digit)}>
      <img src={symbol} alt="Button Icon"/>
    </div>
  );
}