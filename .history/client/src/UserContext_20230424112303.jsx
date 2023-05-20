import axios from "axios";
import "./App.css";
import { createContext, useEffect, useState } from "react";

export const UserContext=createContext({});
export function UserContextProvider({children}){
    const [user, setUser]=useState(null);
    const [ready,SetReady]=useState(false);
    useEffect(()=>{
        if(!user){
        axios.get('/profile').then(({data})=>{

                setUser(data);
                SetReady(true);
            });
    
        }

    
    },[]);
    
    return(<UserContext.Provider value={{user,setUser,ready,SetReady}}>

        {children}
    </UserContext.Provider>
    
    );
}