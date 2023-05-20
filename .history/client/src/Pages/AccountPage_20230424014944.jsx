import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate } from "react-router-dom";

export default function AccountPage(){
    const {ready,user} =useContext(UserContext);
    if(!ready){
        return 'Loading...';
    }
    if(ready && !user){
        return <Navigate to={'/login'}/>
    }
    return(
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2">
                <Link className="py-2 px-6 bg-primary text-white rounded-full " to ={'/account/bookings'}>My profile</Link>
                <Link className="py-2 px-6 " to ={'/account/bookings'}>My bookings</Link>
                <Link className="py-2 px-6 " to ={'/account/places'}>My accomodations</Link>
            </nav>
        </div>
    )
}