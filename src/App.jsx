import { Outlet, useNavigate } from "react-router";

export default function App() {
  const nav = useNavigate();

  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <h1>APP Routing</h1>

      {/* Navigation Section */}
      <section className="flex gap-4">
        <button onClick={() => nav('/')}>Login</button>
        <button onClick={() => nav('/dashboard')}>Dashboard</button>
        <button onClick={() => nav('/dashboard/profile')}>Profile</button>
      </section>

      {/* 
      URL: localhost:5173/dashboard/
      Outlet Component == 
      */}
      <Outlet />
    </main>
  );
}
