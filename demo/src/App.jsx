// Required Imports
import React from "react";
import { useState } from "react";

// Components and Assets
import FormUser from "./components/FormUser";
import Card from "./components/Card";

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

/* Iterations
> Loop inside a array.

map
foreach
sort
filter
  Syntax
    Array.filter((callback) => condition)
    if a condition is true, return the callback

  Example:
    let students = ['marod', 'ian', 'dustin', 'greg']

    let studentsWithFourName = students.filter(student => student.length > 3)

    studentsWithFourName = ['marod', 'dustin', 'greg']
find
*/
export default function App() {
  const [users, setUsers] = useState([
    {
      username: "Frieren",
      age: 1000,
    },
  ]);

  return (
    <main className="min-h-screen text-white bg-slate-900 p-3 text-6xl">
      <FormUser users={users} setUsers={setUsers} />

      {/* <Card user={users[0]} /> */}

      {users.map((user) => (
        <Card user={user} />
      ))}
    </main>
  );
}
