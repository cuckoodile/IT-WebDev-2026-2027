import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  /* useState Syntax
  useEffect(() => {}, [])
  
  const [isVisible, setVisible] = useState(false)
  
  > If your are going to use a state that has no default value, use null instead of leaving it empty.
  // const [userInput, setUserInput] = useState(null)

  > If useState is imported
  const [getter, setter] = useState(default value: Any)

  > If useState is not import
  const [getter, setter] = React.useState(default value: Any)

  > The default value of a state can be any type
    - number (decimal or int)
    - str
    - arr (List in python)
    - obj (Dictionary in python)
    - bool 
    - etc...

  */

  return (
    <div className="min-h-screen bg-slate-800 text-white flex flex-col justify-center items-center gap-6 text-5xl">
      <h1>Counter: {count} </h1>

      <section className="flex gap-4">
        <button onClick={() => setCount(count + 1)} className="bg-green-600 w-12.5 flex items-center justify-center">+</button>
        <button onClick={() => setCount(count - 1)} className="bg-red-600 w-12.5 flex items-center justify-center">-</button>
      </section>
    </div>
  );
}
