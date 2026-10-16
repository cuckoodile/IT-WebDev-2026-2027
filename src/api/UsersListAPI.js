// ModelMethodAPI.js
import { BASE_URL } from "./config.js";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzkyMTE0ODkxLCJpYXQiOjE3OTIxMTMwOTEsImp0aSI6ImZkZWVlNGVjMDcxNDQxODJhOGUyNGFkNTFkMGE1ZmQwIiwidXNlcl9pZCI6IjEifQ.DJeQRbj8tp73iQBXXLmmLCidmcEOqU_gVTXtnE8rImk";

async function LoginAPI() {
  const res = await fetch(`${BASE_URL}/token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "user01",
      password: "Password123!",
    }),
  });

  let data = await res.json();

  if (!res.ok) {
    // throw new Error(data.detail || "Login failed!");
    return data.detail || "Login failed!";
  }

  return data;
}

async function UsersListAPI(token, id = null) {
  const res = await fetch(`${BASE_URL}/users/${id ? id + "/" : ""}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    return data.detail || "Login failed!";
  }

  return data;
}

// console.log(LoginAPI())

// const users = await UsersListAPI(ACCESS_TOKEN)
// console.log(users);

try {
  const token = await LoginAPI();
  const users = await UsersListAPI(token.access);

  console.log(users);
} catch (error) {
  throw new Error(error.message);
}
