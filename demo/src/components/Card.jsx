import React from "react";

export default function Card({ user }) {
  return (
    <div className="border rounded-md p-4">
      <p>Username: {user?.username || "Username"}</p>
      <p>Age: {user?.age || "Age"}</p>
    </div>
  );
}
