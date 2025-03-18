import { createContext } from "react";

export type UserType={
    name:string|undefined,
    setName:(args:string|undefined)=>void;
}
export const LoginContext =createContext<UserType|undefined>(undefined);
