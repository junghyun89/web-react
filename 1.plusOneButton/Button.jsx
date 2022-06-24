import React, { useState } from 'react';

const Button = () => {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((current) => current + 1);
  };

  return (
    <div>
      <span>`Total clicks: {counter}`</span>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default Button;