import { Outlet, useNavigate } from "react-router";

export default function App() {
  const nav = useNavigate();

  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Header Navigation */}
      <header className="bg-slate-800 flex justify-between border-b">
        <h1>APP Routing</h1>

        <nav className="flex gap-3">
          <button onClick={() => nav("/")}>Login</button>
          <button onClick={() => nav("/dashboard")}>Dashboard</button>
          <button onClick={() => nav("/dashboard/profile")}>Profile</button>
        </nav>
      </header>

      {/* 
      URL: localhost:5173/dashboard/
      Outlet Component == 
      */}
      
      <Outlet />
    </main>
  );
}
