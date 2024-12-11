import { createContext, useContext, useReducer } from "react";
import { GlobalReducer } from "./GlobalReducer";

const GlobalContext = createContext();
export const useGlobal = () => useContext(GlobalContext);
export const GlobalProvider = ({ children }) => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const initialState = {
    theme: prefersDarkScheme.matches ? "dark" : "light",
  };
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  const handleToggleTheme = () => {
    const toggleTheme = state.theme === "light" ? "dark" : "light";
    dispatch({
      type: "HANDLE_THEME",
      payload: toggleTheme,
    });
  };

  return (
    <GlobalContext.Provider value={{ theme: state.theme, handleToggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
