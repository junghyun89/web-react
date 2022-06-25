import React, { useState } from "react";

const MinutesToHours = () => {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);
  const onChange = (e) => {
    setAmount(e.target.value);
  };
  const reset = () => {
    setAmount(0);
  };
  const onInvert = () => {
    reset();
    setInverted((current) => !current);
  };
  return (
    <div>
      <div>
        <label htmlFor="Minutes">Minutes</label>
        <input
          value={inverted ? amount * 60 : amount}
          id="Minutes"
          placeholder="Minutes"
          onChange={onChange}
          disabled={inverted}
          type="number"
        />
      </div>
      <div>
        <label htmlFor="Hours">Hours</label>
        <input
          value={inverted ? amount : Math.round(amount / 60)}
          id="Hours"
          placeholder="Hours"
          onChange={onChange}
          disabled={!inverted}
          type="number"
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
    </div>
  );
};

export default MinutesToHours;
