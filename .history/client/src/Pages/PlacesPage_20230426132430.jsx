import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../Perks";



export default function PlacesPage(){
    const{action}=useParams();
    const[title, setTitle]=useState('');
    const[address, setAddress]=useState('');
    const[addedPhotos, setAddedPhotos]=useState([]);
    const[photoLink, setPhotoLink]=useState('');
    const[perks, setPerks]=useState([]);
    const[extraInfo, setExtraInfo]=useState('');
    const[startbid, setStartbid]=useState('');
    const[endbid, setEndbid]=useState('');
    const[maxbid, setMaxbid]=useState(1);
    function inputHeader(text){
        return (
        <h2 className="text-2xl mt-4">{text}</h2>
        );
    }
    function inputDesription(text){
        return(
            <p className="text-gray-500 text-sm">{text}</p>
        );
    }
    function preInput(header,description){
        return(

            <>
                {inputHeader(header)}
                {inputDesription(description)}
            </>
        )
    }

    return(
        <div>
        {action!=='new'&&(
            
            <div className=" text-center">
                <Link className="inline-flex mt-8 gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

                Add new Arts
                </Link>
            </div>
        )}
        {action==='new'&&(
            <div>
                <form>
                {preInput('Title','Title for your place, should be catchy and short as in advertisement')}
                
                    <input type='text' placeholder="title, for example : My Lovely apartment" value={title} onChange={ev=>setTitle(ev.target.value)}/>
                {preInput('Address','Address to your Places')}
                    
                    <input type="text" placeholder="address" value={address} onChange={ev=>setAddress(ev.target.value)}/>
                {preInput('Photos','more=better')}
                    <div className="flex gap-2">
                        <input value={photoLink} onChange={ev=>setPhotoLink(ev.target.value)} type="text" placeholder={'Add using a link.......jpg'}/>
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
                {preInput('Description','description of the place')}
                
                    <textarea/>
                {preInput('Perks','select all the perks')}
                    
                    <Perks Selected={perks} onChange={setPerks}/>
                {preInput('Extra Info','Shape, type, etc')}
                    
                    <textarea/>
                {preInput('Bid start and Bid end','Add bid')}
                    
                    <div className="grid  gap-2 sm:grid-cols-3">
                        <div className="mt-2 -mb-1">
                        <h3>Start bid</h3>
                            <input type="text" placeholder="INR"/>
                        </div>
                        <div className="mt-2 -mb-1">
                        <h3>End bid</h3>
                            <input type="text" placeholder="INR"/>
                        </div>
                        <div className="mt-2 -mb-1">
                        <h3>Max bids</h3>
                            <input type="text" placeholder="Number"/>
                        </div>
                    </div>
                    <button className="primary my-4">Save</button>
                </form>
            </div>
        )}
        </div>
    )
}