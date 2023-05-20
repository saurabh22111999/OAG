import { Link, useParams } from "react-router-dom";


export default function PlacesPage(){
    const{action}=useParams();

    return(
        <div>
        {action!=='new'&&(
            
            <div className=" text-center">
                <Link className="inline-flex mt-8 gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
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
                <h2 className="text-2xl mt-4">Title</h2>
                <p className="text-gray-500 text-sm">Title for your place, should be catchy and short as in advertisement</p>
                    <input type='text' placeholder="title, for example : My Lovely apartment"/>
                    <h2 className="text-2xl mt-4">Address</h2>
                    <p className="text-gray-500 text-sm">Address to your Places</p>
                    <input type="text" placeholder="address"/>
                    <h2 className="text-2xl mt-4">Photos</h2>
                    <p className="text-gray-500 text-sm">more=better</p>
                    <div>
                        
                    </div>
                    <button className="border bg-transparent rounded-2xl p-4">+</button>
                    

                </form>
            </div>
        )}
        </div>
    )
}