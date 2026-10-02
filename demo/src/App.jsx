// Required Imports
import React from "react";
import { useState } from "react";

// Components and Assets
import Counter from "./components/Counter";
import { useEffect } from "react";
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
  const [users, setUsers] = useState([
    {
      username: "Frieren",
      age: 1000,
    },
  ]);

  const [formData, setFormData] = useState({
    username: "",
    age: 0,
  });
  // formData.username
  // formData.age

  // useEffect(() => {
  //   const timeId = setTimeout(() => {
  //     console.log(formData);
  //   }, 1500);

  //   return () => clearTimeout(timeId);
  // }, [formData]);

  function handleFormSubmit() {
    alert(JSON.stringify(formData));
    setUsers([...users, {formData}]);

    alert(JSON.stringify(users));
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    // name = "age" || "username"

    setFormData({ ...formData, [name]: value });
  }

  return (
    <main className="min-h-screen text-white bg-slate-900 p-3 text-6xl">
      {/* Fill Up Form Section */}
      <section>
        <form onSubmit={handleFormSubmit}>
          {/* Username Field */}
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="cuckoodile"
              value={formData.username}
              onChange={handleInputChange}
            />
            {formData.username == "ian sube" && (
              <p className="text-red-700">Username is already taken!</p>
            )}
          </div>

          {/* Age Field */}
          <div>
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              name="age"
              id="age"
              placeholder="99"
              min={1}
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>

          {/* Action Section */}
          <div>
            <button type="submit">Create</button>
          </div>
        </form>

        <div>
          <button>Hide</button>
        </div>
      </section>
    </main>
  );
}
