import React, { useEffect, useState } from "react";
import profile from "./assets/profile.jpg";
import fern from "./assets/fern.jpg";
import stark from "./assets/stark.jpg";

// let data = {
//   first_name: "Lhourde Ian",
//   last_name: "Sube",
//   age: 99,
//   profile: profile,
// };

export default function App() {
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState([
    {
      first_name: "Ian",
      last_name: "Sube",
      age: 99,
      profile: profile,
    },
    {
      first_name: "Fern",
      last_name: "No",
      age: 21,
      profile: fern,
    },
    {
      first_name: "Stark",
      last_name: "No",
      age: 21,
      profile: stark,
    },
  ]);

  useEffect(() => {
    setUserInfo([
      (userInfo[0] = {
        first_name: "Frieren",
        last_name: "The Slayer",
        ...userInfo[0],
      }),
      ...userInfo,
    ]);
  }, []);

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
    <main className="min-h-screen bg-slate-800 text-white flex flex-col justify-center items-center gap-6 text-5xl">
      {/* Counter Section */}
      <section className="bg-slate-700 flex flex-col justify-center items-center gap-6 border rounded-2xl p-4">
        <h1>Counter: {count} </h1>
        <section className="flex gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-600 w-12.5 flex items-center justify-center"
          >
            +
          </button>
          <button
            onClick={() => (count > 0 ? setCount(count - 1) : stop)}
            className="bg-red-600 w-12.5 flex items-center justify-center"
          >
            -
          </button>
        </section>
      </section>

      {/* User Info Section */}
      <section className="bg-slate-700 flex flex-col justify-center items-center gap-6 border rounded-2xl p-4">
        {/* Card */}
        {userInfo.map((user) => (
          <div key={user.first_name}>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>Age: {user.age}</p>

            <img src={user.profile} alt="Frieren" />
            {/* <img src="{URL}" alt="" /> */}
          </div>
        ))}
      </section>
    </main>
  );
}

{
  () => setCount(count > 0 ? count - 1 : 0);
}

{
  () => setCount(count - 1);
}
