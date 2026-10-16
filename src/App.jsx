import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="bg-slate-950 text-white text-5xl min-h-screen flex flex-col px-20">
      <Header />

      <main className="bg-slate-900 flex-1 flex p-4">
        <Outlet />
      </main>
    </div>
  );
}
