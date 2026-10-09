import React from "react";
import { useParams } from "react-router";

const users = [
  {
    id: 1,
    username: "Frieren",
  },
  {
    id: 2,
    username: "Fern",
  },
  {
    id: 3,
    username: "Stark",
  },
];

export default function Profile() {
  const { pk } = useParams();

  return (
    <div>
      <p>Profile {pk} </p>

      {users.map((user) => {
        if (user.id == pk) {
          return <p>{user.username}</p>;
        }
      })}
    </div>
  );
}
