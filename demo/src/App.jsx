import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  // This is string interpolation
  // let display = `Counter ${counter}`

  return (
    <main className="min-h-screen bg-slate-700 p-4 text-white text-5xl flex justify-center items-center flex-col gap-4">
      {/* This is JS Expression using curly brace ({}) */}
      {/* <h1>{display}</h1> */}
      <h1>Counter {counter}</h1>

      {/* Buttons */}
      <div className="flex gap-4">
        <button onClick={() => setCounter(counter + 1)} className="border">Add</button>
        <button onClick={() => setCounter(counter - 1)} className="border">Minus</button>
      </div>
    </main>
  );
}

/* Counter Project on Vanilla in comparison to React

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>Counter</title>
<script src="https://cdn.tailwindcss.com"></script>
<style>
  :root { box-sizing: border-box; }
  html, body { height: 100%; margin: 0; }
</style>
</head>
<body class="min-h-screen bg-slate-700 p-4 text-white text-5xl flex justify-center items-center flex-col gap-4">

  <!-- This is where the counter value gets rendered -->
  <h1 id="counter-display">Counter 0</h1>

  <!-- Buttons -->
  <div class="flex gap-4">
    <button id="add-btn" class="border">Add</button>
    <button id="minus-btn" class="border">Minus</button>
  </div>

  <script>
    // Plain JS variable standing in for React's useState
    let counter = 0;

    const display = document.getElementById("counter-display");
    const addBtn = document.getElementById("add-btn");
    const minusBtn = document.getElementById("minus-btn");

    // Manual re-render function, since there's no React to do it for us
    function render() {
      // This is the vanilla equivalent of string interpolation / JSX expression
      display.textContent = `Counter ${counter}`;
    }

    addBtn.addEventListener("click", () => {
      counter += 1;
      render();
    });

    minusBtn.addEventListener("click", () => {
      counter -= 1;
      render();
    });

    // Initial paint
    render();
  </script>

</body>
</html>

*/