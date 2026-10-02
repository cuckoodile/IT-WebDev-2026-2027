import React from "react";
import { useState } from "react";

export default function Card({ user, setUsers, users }) {
  const [isUpdate, setUpdate] = useState(false);

  function handleDelete() {
    setUsers(
      users.filter((currentUser) => currentUser.username !== user.username),
    );
    // if user.username == u.username
    // console.log()
  }

  return (
    <div className="border rounded-md p-4">
      <p>
        Username:{" "}
        {isUpdate ? (
          <input value={user.username} />
        ) : (
          user?.username || "Username"
        )}
      </p>
      <p>Age: {user?.age || "Age"}</p>

      <button onClick={() => setUpdate(!isUpdate)} className="bg-green-800">
        {isUpdate ? "Cancel" : "Edit"}
      </button>
      <button onClick={handleDelete} className="bg-red-800">
        Delete
      </button>
    </div>
  );
}
