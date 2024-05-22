import { IContextType } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

export const INITIAL_USER = {
  id: "",
  name: "",
  email: "",
  username: "",
  password: "",
  imageUrl: "",
  bio: "",
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  chaeckAuthUser: async () => false as boolean,
};

export const AuthContext = createContext<IContextType>(INITIAL_STATE);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <div>AuthContext</div>;
};

export default AuthContext;
