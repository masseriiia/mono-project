import { createContext } from "react";
import { initialState } from "../components/state";

export const UserContext = createContext(initialState)

export const UserContextProvider = ({children}) => {
    return (
        <UserContext.Provider value={{initialState}}>
            {children}
        </UserContext.Provider>
    )
}