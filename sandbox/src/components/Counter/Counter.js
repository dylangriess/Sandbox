import React, { useEffect } from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  function adjustCount(amount) {
    setCount((currentCount) => {
      return currentCount + amount;
    });
  }

  return (
    <>
      <button onClick={() => adjustCount(-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => adjustCount(1)}>+</button>
    </>
  );
}

export default Counter;
