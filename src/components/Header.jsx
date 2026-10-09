import React from "react";
import { useNavigate } from "react-router";

export default function Header() {
  const nav = useNavigate();
  return (
    <header className="bg-slate-800 flex justify-between border-b">
      <h1>My Portfolio</h1>

      <nav className="flex gap-3">
        <button onClick={() => nav("/")}>About Me</button>
        <button onClick={() => nav("/hobby/1")}>Games</button>
        <button onClick={() => nav("/hobby/2")}>Family Bonding</button>
        <button onClick={() => nav("/hobby/3")}>Studying</button>
      </nav>
    </header>
  );
}
