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
            <nav className="w-full flex mt-4">
                <Link className="p-2" to ={'/account/bookings'}>Mybookings</Link>
                <Link className="p-2" to ={'/account/bookings'}>Mybookings</Link>
                <Link className="p-2" to ={'/account/places'}>My accomodations</Link>
            </nav>
        </div>
    )
}