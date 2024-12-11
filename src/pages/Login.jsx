import { Input } from "../components/Forms/Inputs";
import { ButtonPrimary } from "../components/Buttons";
import { useGlobal } from "../context/Global/GlobalContext";
import Logo from "../assets/Flaticons/task-management.png";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function Login() {
  const navigate = useNavigate();
  const { theme } = useGlobal();
  const { singIn, auth, session } = useAuth();
  const [alert, setAlert] = useState({visibility: 'hidden', message: ''})
  useEffect(() => {
    auth();
    if (!session) navigate("/login");
  }, []);
  useEffect(() => {
    if (session) navigate("/");
  }, [session]);
  return (
    <div
      className={`grid h-screen place-content-center bg-white ${
        theme === "dark" ? "dark:bg-slate-800" : ""
      }`}
    >
      <div className={`absolute top-5 w-full ${alert.visibility}`}>
        <div
          role="alert"
          className="mx-auto w-80 rounded border-s-4 border-red-500 bg-red-50 p-4 dark:border-red-600 dark:bg-red-900"
        >
          <p className="text-sm text-red-700 dark:text-red-200">
            {alert.message}
          </p>
        </div>
      </div>

      <div
        className={`flex flex-col gap-y-7 w-80 rounded border border-slate-300 p-5 bg-white ${
          theme === "dark" ? "dark:bg-slate-700 dark:border-slate-500" : ""
        }`}
      >
        <img className="w-20 h-20 mx-auto mt-3" src={Logo} alt="Workflow" />
        <h2
          className={`text-center text-2xl font-medium text-gray-600 ${
            theme === "dark" ? "dark:text-gray-200" : ""
          }`}
        >
          Ingresar
        </h2>
        <Input id="email" label={"Email"} theme={theme} type={"email"} />
        <Input
          id="password"
          label={"Contraseña"}
          theme={theme}
          type={"password"}
        />
        <ButtonPrimary
          type={"button"}
          handleClick={async () => {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const { data, error } = await singIn(email, password);
            if (error) {
              if (error.code == "email_not_confirmed") {
                setAlert({ visibility: 'visible', message: 'Por favor confirma tu email' });
              }
            }
            console.log(data);
          }}
        >
          Ingresar
        </ButtonPrimary>
        <span className="text-center text-sm text-slate-300">
          ¿Aún no tienes credenciales? Ingresa Aquí
        </span>
      </div>
    </div>
  );
}
