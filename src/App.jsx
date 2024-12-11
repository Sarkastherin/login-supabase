import "./App.css";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import { GlobalProvider } from "./context/Global/GlobalContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import { Materiales } from "./pages/Materailes";
const router = createBrowserRouter([
  { path: '/', element: <Layout/>, 
    children: [
      
      { path: "/", element: <Home /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/materiales", element: <Materiales /> },
      
  ]},
  { path: "/login", element: <Login /> },
  { path: '*', element: <h1>Error</h1>}
])

function App() {

  return (
    <AuthProvider>
      <GlobalProvider>
        <RouterProvider router={router}></RouterProvider>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
