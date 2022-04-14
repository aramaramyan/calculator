import "./Button.css";

export default function Button({symbol, color, width}) {
  return (
    <div className="button_wrapper" style={{width: width}}>
      <img src={symbol} alt="Button Icon"/>
    </div>
  );
}