import React, { useState } from "react";
import KmToMiles from "./KmToMiles";
import MinutesToHours from "./MinutesToHours";
import "style.css";
import Btn from "./Btn";

const App = () => {
  const [index, setIndex] = useState(-1);
  const onSelect = (e) => {
    setIndex(e.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="-1">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "-1" ? "Please select your units" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
};

export default App;
