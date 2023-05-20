import { Link } from "react-router-dom";

export default function PlacesPage(){
    return(
        <div>
            <div className="">
                <Link className="bg-primary text-white py-2 px-4" to={'/account/places/new'}></Link>
            </div>
        </div>
    )
}