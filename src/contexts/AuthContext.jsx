import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useLocalStorage("token", null);
  const [isAuth, setIsAuth] = useState(false);
  const [role, setRole] = useLocalStorage("role", null);

  useEffect(() => {
    if (token) {
      setIsAuth(true);
    }
  }, [token]);

  const login = (token, role) => {
    setIsAuth(true);
    setRole(role);
    setToken(token);
  };

  const logout = () => {
    setIsAuth(false);
    setRole(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuth,
        role,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
