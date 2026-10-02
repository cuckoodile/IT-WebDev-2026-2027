import React from "react";
import { useState } from "react";

export default function FormUser({users, setUsers}) {
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

  function handleFormSubmit(e) {
    e.preventDefault();

    setUsers([...users, formData]);
    setFormData({ username: "", age: 0 });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    // name = "age" || "username"

    setFormData({ ...formData, [name]: value });
  }
  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        {/* Username Field */}
        <div>
          <label htmlFor="username">Usernames: </label>
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
  );
}
