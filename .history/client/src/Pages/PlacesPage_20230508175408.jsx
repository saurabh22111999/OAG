import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Perks from "../Perks";
import axios from "axios";



export default function PlacesPage(){
    const{action}=useParams();
    
    const [redirectToPLacesList,setredirectToPlacesList]=useState(false);
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
    
    async function addPhotoByLink(ev){
        ev.preventDefault();
        const {data:filename}=await axios.post('/upload-by-link',{link:photoLink})
        setAddedPhotos(prev=>{
            
            return [...prev,filename]
        })
        setPhotoLink('')
    }
    function uploadPhoto(ev){
        const files=ev.target.files;
        const data=new FormData();
        for(let i=0;i<files.length;i++){
            
            data.append('photos',files[i]);
        }

        axios.post('/upload',data,{
            headers: {'Content-Type': 'multipart/form-data'}
        }).then(response=>{
            const{data:filenames}=response;
            setAddedPhotos(prev=>{
                return [...prev,...filenames];
            })
        })      
    }
   
    async function addNewArt(ev){
        ev.preventDefault();
        
     await axios.post('/places',{
        title,address,addedPhotos,
        description,perks,extraInfo,
        startbid,endbid,maxbid})
        setredirectToPlacesList(true)


    }
    if(redirectToPLacesList && !action!=='new'){
    return <Navigate to={'/account/places'} />
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
            
        )}
        </div>
    )
}