// Required Imports
import React from "react";
import { useState } from "react";

// Components and Assets
import Counter from "./components/Counter";
// git clone {url} .
// git switch session_8

/* Ternary Operator
Syntax:
condition ? (if true) : (if false)
counter > 0 ? (setCounter(counter - 1)) : stop
*/

/* DRY Principle (Don't Repeat Yourself)
- Try to reuse codes as much as possible, instead of typing them again and again.
*/

export default function App() {
  function handleFormSubmit() {
    alert("Hello world!");
  }

  return (
    <main className="min-h-screen text-white bg-slate-900 p-3 text-6xl">
      {/* Fill Up Form Section */}
      <section>
        <form onSubmit={handleFormSubmit}></form>

        <div>
          <button>Hide</button>
        </div>
      </section>
    </main>
  );
}
