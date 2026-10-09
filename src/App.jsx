import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="bg-slate-950 text-white text-[1.3rem] min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex">
        <Outlet />
      </main>
    </div>
  );
}
