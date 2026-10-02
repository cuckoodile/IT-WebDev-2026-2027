import React from "react";
import { useState } from "react";

export default function Counter({ name = 1 }) {
  const [counter, setCounter] = useState(0);

  return (
    <div className="bg-red">
      <p className="mb-5">
        Counter{name}: {counter}
      </p>

      <button onClick={() => setCounter(counter + 1)} className="mr-3">
        +
      </button>
      <button onClick={() => (counter > 0 ? setCounter(counter - 1) : 0)}>
        -
      </button>
    </div>
  );
}
