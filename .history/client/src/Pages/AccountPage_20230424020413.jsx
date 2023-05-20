import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom";

export default function AccountPage(){
    const {ready,user} =useContext(UserContext);
    if(!ready){
        return 'Loading...';
    }
    if(ready && !user){
        return <Navigate to={'/login'}/>
    }
    const {subpage}=useParams();
    function linkClasses(type=null){
        let classes= 'py-2 px-6';
        if(type===subpage){
            classes+='bg-primary text-white rounded-full';

        }
        return classes;
    }

    return(
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2">
                <Link className={linkClasses('profile')}   to ={'/account/bookings'}>My profile</Link>
                <Link className={linkClasses('bookings')} to ={'/account/bookings'}>My bookings</Link>
                <Link className={linkClasses('places')} to ={'/account/places'}>My accomodations</Link>
            </nav>
        </div>
    )
}