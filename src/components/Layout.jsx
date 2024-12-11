import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useGlobal } from "../context/Global/GlobalContext";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function Layout() {
  const navigate = useNavigate();
  const {theme} = useGlobal()
  const {auth, session} = useAuth();
  useEffect(() => {
    auth();
    if (!session) navigate("/login");
  }, []);
  
  return (
    <>
      <div className={`bg-white text-gray-600 ${theme === "dark" ? "dark:bg-slate-800 dark:text-slate-200" : ""}`}>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
