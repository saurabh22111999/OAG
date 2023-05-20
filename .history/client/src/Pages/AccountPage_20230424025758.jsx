import { useContext } from "react"
import '../App.css'
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom";

export default function AccountPage(){
    const {ready,user} =useContext(UserContext);
    let {subpage}=useParams();
    if(subpage ===undefined){
        subpage='profile';}
        async function logout(){
         await   axios.post('/logout');
        }
    if(!ready){
        return 'Loading...';
    }
    if(ready && !user){
        return <Navigate to={'/login'}/>
    }
    
    
    function linkClasses(type=null){
        let classes= 'py-2 px-6';
        if(type===subpage || (subpage===undefined&& type==='profile')){
            classes+='bg-primary text-white rounded-full';

        }
        return classes;
    }

    return(
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2">
                <Link className={linkClasses('profile')}  to ={'/account/bookings'}>My profile</Link>
                <Link className={linkClasses('bookings')} to ={'/account/bookings'}>My bookings</Link>
                <Link className={linkClasses('places')} to ={'/account/places'}>My accomodations</Link>
            </nav>
            {subpage==='profile'&&(
                <div className="text-center max-w-lg mx-auto">
                    Logged in as{user.name} ({user.email})<br/>
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}
        </div>
    )
}