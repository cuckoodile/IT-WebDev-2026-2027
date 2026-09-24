import React, { useEffect, useState } from "react";

export default function Box({ num }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Code Block
    console.log("Box #" + num + " Count: " + count);

    /* useEffect Trigger Timings
      1. onMount
      2. onUpdate
      3. Cleanup (onUmMount)
    */
  }, [count]);

  return (
    <div
      onClick={() => setCount(count + 1)}
      className="border p-4 rounded bg-cyan-600 cursor-pointer"
    >
      <p>{count}</p>
    </div>
  );
}
