import { createContext, useEffect, useState } from "react";

export const UserContext=createContext({});
export function UserContextProvider({children}){
    const [user, setUser]=useState(null);
    useEffect(()=>)
    return(<UserContext.Provider value={{user,setUser}}>

        {children}
    </UserContext.Provider>
    
    );
}