import { createContext, ReactNode, useEffect, useState } from "react";

import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from "@storage/storageUser";

import { api } from "@services/api";
import { UserDTO } from "@dtos/UserDTO";
import {
  storageAuthTokenSave,
  storageAuthTokenGet,
  storageAuthTokenRemove,
} from "@storage/storageAuthToken";

export type AuthContextDataProps = {
  user: UserDTO;
  isLoadingUserStorageData: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  handleUpdateUser: (userUpdated: UserDTO)=> Promise<void>
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);
export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] =
    useState(true);

  async function userAndTokenUpdate(user: UserDTO, token: string) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setUser(user);
  }
  async function storageSaveUserAndToken(user: UserDTO, token: string) {
    try {
      setIsLoadingUserStorageData(true);

      await storageUserSave(user);
      await storageAuthTokenSave(token);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post("/sessions", { email, password });

      if (data.user && data.token) {
        console.log(data.user, data.token);
        storageSaveUserAndToken(data.user, data.token);
        userAndTokenUpdate(data.user, data.token);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function signOut() {
    try {
      setIsLoadingUserStorageData(true);
      setUser({} as UserDTO);
      await storageUserRemove();
      await storageAuthTokenRemove();
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function loadUserData() {
    try {
      setIsLoadingUserStorageData(true);
      const userLogged = await storageUserGet();
      const token = await storageAuthTokenGet();

      if (userLogged && token) {
        userAndTokenUpdate(userLogged, token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }


  async function handleUpdateUser(userUpdated:UserDTO){
    try{

      setUser(userUpdated);
      await storageUserSave(userUpdated)


    }catch(error){
      throw error;
    }
  }
  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoadingUserStorageData,
        signIn,
        signOut,
        handleUpdateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
