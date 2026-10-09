import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import PopupLogin from "./components/popups/PopupLogin";

export default function App() {
  const nav = useNavigate();

  const [isLoginVisible, setLoginVisible] = useState(false);

  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Header Navigation */}
      {isLoginVisible && (
        <PopupLogin
          isLoginVisible={isLoginVisible}
          setLoginVisible={setLoginVisible}
        />
      )}

      <header className="bg-slate-800 flex justify-between border-b">
        <h1>APP Routing</h1>

        <nav className="flex gap-3">
          {/* <button onClick={() => nav('/')}>Login</button> */}
          <button onClick={() => setLoginVisible(true)}>Login</button>
          <button onClick={() => nav("/dashboard")}>Dashboard</button>
          <button onClick={() => nav("/dashboard/profile/2")}>Profile</button>
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
