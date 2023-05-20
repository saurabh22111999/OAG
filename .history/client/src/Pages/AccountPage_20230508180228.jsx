import { useContext, useState } from "react"
import '../App.css'
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";

export default function AccountPage(){
    const [redirect,setRedirect]=useState(null);
    const {ready,user,setUser} =useContext(UserContext);
    let {subpage}=useParams();
    if(subpage ===undefined){
        subpage='profile';
    }


    async function logout(){
        await   axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }


    if(!ready){
        return 'Loading...';
    }
    if(ready && !user && !redirect){
        return <Navigate to={'/login'}/>
    }
    
    
    function linkClasses(type=null){
        let className= 'inline-flex items-center gap-1 py-2 px-6 bg-gray-200 rounded-full';
        if(type===subpage){
            className='inline-flex items-center gap-1 py-2 px-6 bg-primary text-white rounded-full';

        }
        return className;
    }
if(redirect){
    return<Navigate to={redirect}/>
}
    return(
        <div>
            
            {subpage==='profile'&&(
                <div className="text-center max-w-lg mx-auto mt-6">
                    Logged in as {user.name} ({user.email})<br/>
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}
            {subpage==='places' && (
                <PlacesPage/>
            )}
        </div>
    )
}