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