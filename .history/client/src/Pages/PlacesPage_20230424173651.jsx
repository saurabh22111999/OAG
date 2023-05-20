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
                    <div className="flex gap-2">
                        <input type="text" placeholder={'Add using a link.......jpg'}/>
                        <button className="bg-gray-200 px-4 rounded-2xl"> Add&nbsp; Photo</button>
                    </div>
                    
                    <div className=" mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

                    <button className=" flex gap-1 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                    Upload
                    </button>
                    </div>
                    <h2 className="text-2xl mt-4">Desription</h2>
                    <p className="text-gray-500 text-sm">description of the place</p>
                    <textarea/>
                    <h2 className="text-2xl mt-4">Perks</h2>
                    <p className="text-gray-500 text-sm">select all the perks </p>
                    <div>
                        <label>
                            <input type="checkbox"/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
</svg>

                            <span>Wifi</span>

                        </label>
                        <label>
                            <input type="checkbox"/>
                            <span>free parking</span>

                        </label>
                        <label>
                            <input type="checkbox"/>
                            <span>Tv</span>

                        </label>
                        <label>
                            <input type="checkbox"/>
                            <span>pets</span>

                        </label>
                        <label>
                            <input type="checkbox"/>
                            <span>private etrance</span>

                        </label>
                    </div>
                </form>
            </div>
        )}
        </div>
    )
}