import React from "react";

import Img from "../assets/default.webp";

export default function Header() {
  return (
    <header className="flex justify-between py-4">
      <p>User</p>

      <div className="flex items-center gap-5">
        <img src={Img} alt="Default" className="size-10 rounded-full" />
        <p>Admin</p>
        <button>Sign out</button>
      </div>
    </header>
  );
}
