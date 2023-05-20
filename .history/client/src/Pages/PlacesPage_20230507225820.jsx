import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Perks from "../Perks";
import axios from "axios";
import PhotosUploader from "../PhotosUploader";



export default function PlacesPage(){
    const{action}=useParams();
    const[title, setTitle]=useState('');
    const[address, setAddress]=useState('');
    const[addedPhotos, setAddedPhotos]=useState([]);
    
    const[description, setdescription]=useState('');
    const[perks, setPerks]=useState([]);
    const[extraInfo, setExtraInfo]=useState('');
    const[startbid, setStartbid]=useState('');
    const[endbid, setEndbid]=useState('');
    const[maxbid, setMaxbid]=useState(1);
    const [redirect,setredirect]=useState('');
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
    async function addNewArt(ev){
        ev.preventDefault();
        
     await axios.post('/places',{
        title,address,addedPhotos,
        description,perks,extraInfo,
        startbid,endbid,maxbid})
        setredirect('/account/places')


    }
    if(redirect){
    return <Navigate to={redirect} />
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
                <form onSubmit={addNewArt}>
                {preInput('Title','Title for your place, should be catchy and short as in advertisement')}
                
                    <input type='text' placeholder="title, for example : My Lovely apartment" value={title} onChange={ev=>setTitle(ev.target.value)}/>
                {preInput('Address','Address to your Places')}
                    
                    <input type="text" placeholder="address" value={address} onChange={ev=>setAddress(ev.target.value)}/>
                {preInput('Photos','more=better')}
                   <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
                {preInput('Description','description of the place')}
                
                    <textarea value={description} onChange={ev=>setdescription(ev.target.value)}/>
                {preInput('Perks','select all the perks')}
                    
                    <Perks Selected={perks} onChange={setPerks}/>
                {preInput('Extra Info','Shape, type, etc')}
                    
                    <textarea/>
                {preInput('Bid start and Bid end','Add bid')}
                    
                    <div className="grid  gap-2 sm:grid-cols-3">
                        <div className="mt-2 -mb-1">
                        <h3>Start bid</h3>
                            <input type="text" 
                            placeholder="INR" 
                            value={startbid} 
                            onChange={ev=>setStartbid(ev.target.value)}/>
                        </div>
                        <div className="mt-2 -mb-1">
                        <h3>End bid</h3>
                            <input type="text" 
                            placeholder="INR" 
                            value={endbid} 
                            onChange={ev=>setEndbid(ev.target.value)}/>
                        </div>
                        <div className="mt-2 -mb-1">
                        <h3>Max bids</h3>
                            <input type="Number" 
                            placeholder="Number"
                            value={maxbid}
                             onChange={ev=>setMaxbid(ev.target.value)}/>
                        </div>
                    </div>
                    <button className="primary my-4">Save</button>
                </form>
            </div>
        )}
        </div>
    )
}