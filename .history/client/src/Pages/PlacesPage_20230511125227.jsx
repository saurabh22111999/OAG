import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import AccountNav from "../AccountNav";
import axios from "axios";




export default function PlacesPage(){
    const{action}=useParams();
    useEffect(()=>{
        axios.get('/places').then(({data}))
    },[])
    

    return(
        <div>
        <AccountNav/>
        
            
            <div className=" text-center mt-8">
            list of all arts 
            <br/>
                <Link className="inline-flex  gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

                Add new Arts
                </Link>
            </div>
        
        
        </div>
    )
}