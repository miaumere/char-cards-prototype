import React from "react";
import { ILoggedUser } from "./Main";
  
export const LoggedUserContext = React.createContext< [ILoggedUser | null, Function] | null>(null);