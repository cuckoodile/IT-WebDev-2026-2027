// ModelMethodAPI.js
import { BASE_URL, ACCESS_TOKEN } from "./config.js";

export async function LoginAPI() {
  const res = await fetch(`${BASE_URL}/token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "user01",
      password: "Password123!",
    }),
    // body: JSON.stringify(),
  });

  let data = await res.json();

  if (!res.ok) {
    // throw new Error(data.detail || "Login failed!");
    return data.detail || "Login failed!";
  }

  return data;
}

export async function ProductsListAPI(token, id = null) {
  console.log(`${BASE_URL}/users/${id ? id + "/" : ""}`);

  // const res = fetch(`http://127.0.0.1:8000/api/products/`)
  // const res = fetch(`http://127.0.0.1:8000/api/products/{id}/`)

  //   res var. will represent the fetched JSON from the backend(Django)
  const res = await fetch(`${BASE_URL}/users/${id ? id + "/" : ""}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  //   Will represent the converted JSON data(res) to JS data
  const data = await res.json();

  //   res.ok if fetched data status 200 - 299
  if (!res.ok) {
    return data.detail || "Product list failed";
  }

  console.log("Product list: ", data);
  return data;
}

export async function UsersListAPI(token) {
  const res = await fetch(`${BASE_URL}/users/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.detail || "Failed to fetch users");
  }

  return data;
}

// console.log(LoginAPI())

// const users = await UsersListAPI(ACCESS_TOKEN)
// console.log(users);

try {
  let users = await ProductsListAPI(ACCESS_TOKEN, 2);
  //   let users = await LoginAPI();

  //   console.log(users);
} catch (error) {
  throw new Error(error.message);
}
