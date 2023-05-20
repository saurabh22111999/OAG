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
        let className= 'py-2 px-6';
        if(type===subpage){
            className='py-2 px-6 bg-primary text-white rounded-full';

        }
        return className;
    }
if(redirect){
    return<Navigate to={redirect}/>
}
    return(
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2">
                <Link className={linkClasses('profile')}  to ={'/account'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

                My profile
                </Link>
                <Link className={linkClasses('bookings')} to ={'/account/bookings'}>
                My bookings
                </Link>
                <Link className={linkClasses('places')} to ={'/account/places'}>
                My accomodations
                </Link>
            </nav>
            {subpage==='profile'&&(
                <div className="text-center max-w-lg mx-auto">
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