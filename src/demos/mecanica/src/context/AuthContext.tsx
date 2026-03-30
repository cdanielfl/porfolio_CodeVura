import React, { createContext, useContext, useState, useEffect } from "react";
import { User, MOCK_USERS } from "../data/mockData";

interface AuthContextType {
  user: User | null;
  login: (email: string, role: "customer" | "admin") => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("apex_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, role: "customer" | "admin") => {
    const foundUser = MOCK_USERS.find((u) => u.email === email && u.role === role) || {
      id: `user-${Date.now()}`,
      name: email.split("@")[0],
      email,
      phone: "(555) 000-0000",
      role,
    };
    setUser(foundUser);
    localStorage.setItem("apex_user", JSON.stringify(foundUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("apex_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
