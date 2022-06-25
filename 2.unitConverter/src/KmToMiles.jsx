import React, { useState } from "react";

const KmToMiles = () => {
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
        <label htmlFor="Miles">Miles</label>
        <input
          value={inverted ? Math.round(amount / 1.609344) : amount}
          id="Miles"
          placeholder="Miles"
          onChange={onChange}
          disabled={inverted}
          type="number"
        />
      </div>
      <div>
        <label htmlFor="Km">Km</label>
        <input
          value={inverted ? amount : Math.round(amount * 160.9344) / 100}
          id="Km"
          placeholder="Km"
          onChange={onChange}
          disabled={!inverted}
          type="number"
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? "Turn back" : "Inverted"}</button>
    </div>
  );
};

export default KmToMiles;
