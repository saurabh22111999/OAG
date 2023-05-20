import { useState } from "react";
import axios from "axios";

export default function PhotosUploader({addedPhotos, onChange}){
    
    const[photoLink, setPhotoLink]=useState('');
    async function addPhotoByLink(ev){
        ev.preventDefault();
        const {data:filename}=await axios.post('/upload-by-link',{link:photoLink})
        onChange(prev=>{
            
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
            onChange(prev=>{
                return [...prev,...filenames];
            })
        })      
    }
    return(
        <>
             
        </>
    );
}