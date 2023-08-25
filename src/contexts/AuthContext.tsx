import { ReactNode, createContext, useContext, useState } from "react";
import { UserDTO } from "src/dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => void;
};
type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);
const [user, setUser] = useState({
  id: "1",
  name: "Matheus",
  email: "matheusguim13@gmail.com",
  avatar: "matheus.png",
});

export function signIn(email: string, password: string) {
  setUser({
    id: "",
    name: "",
    email: "",
    avatar: "",
  });
}
export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
