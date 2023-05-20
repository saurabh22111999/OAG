import { createContext, useState } from "react";

export const UserContext=createContext({});
export function UserContextProvider({children}){
    const [user, setUser]=useState(null);
    return(<UserContext.Provider value={{}}>

        {children}
    </UserContext.Provider>
    
    );
}