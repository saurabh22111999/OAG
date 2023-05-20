import { Link, useParams } from "react-router-dom";

export default function PlacesPage(){
    const{action}=useParams();

    return(
        <div>
        {action!=='new'&&(
            
            <div className=" text-center">
                <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

                Add new places
                </Link>
            </div>
        )}
        {action==='new'&&(
            <div>
                <form>
                <h2>title</h2>
                    <input type='text' placeholder="title, for example : My Lovely apartment"/>
                    <input type="text" placeholder="address"/>
                    <h2>Photos</h2>

                </form>
            </div>
        )}
        </div>
    )
}