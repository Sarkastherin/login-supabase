import { createContext, useContext, useReducer } from "react";
import { supabase } from "../supabaseClient";
import { useState } from "react";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const auth = async () => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  };
  const singIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    return {data, error}
    ;
  }
  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) return error;
  }
  return (
    <AuthContext.Provider value={{ auth, session, singIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
