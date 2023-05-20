import { useEffect, useState } from "react";
import Perks from "../Perks";
import AccountNav from "../AccountNav";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PhotosUploader from "../PhotosUploader";

export default function PlacesFormPage(){
    const {id}=useParams()

    const[title, setTitle]=useState('');
    const[address, setAddress]=useState('');
    const[addedPhotos, setAddedPhotos]=useState([]);
    const[photoLink, setPhotoLink]=useState('');
    const[description, setdescription]=useState('');
    const[perks, setPerks]=useState([]);
    const[extraInfo, setExtraInfo]=useState('');
    const[startbid, setStartbid]=useState('');
    const[endbid, setEndbid]=useState('');
    const[maxbid, setMaxbid]=useState(1);
    const [redirect,setRedirect]=useState(false);
    useEffect(()=>{
if (!id){
    return;
}
axios.get('/places/'+id).then(response=>{
    const{data}=response;
    setTitle(data.title);
       setAddress(data.address);
       setAddedPhotos(data.photos);
       setdescription(data.description);
       setPerks(data.perks);
       setExtraInfo(data.extraInfo);
       setStartbid(data.startbid);
       setEndbid(data.endbid);
       setMaxbid(data.maxbid);
       
})
    },[id])
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
    // function uploadPhoto(ev){
    //     const files=ev.target.files;
    //     const data=new FormData();
    //     for(let i=0;i<files.length;i++){
            
    //         data.append('photos',files[i]);
    //     }

    //     axios.post('/upload',data,{
    //         headers: {'Content-Type': 'multipart/form-data'}
    //     }).then(response=>{
    //         const{data:filenames}=response;
    //         setAddedPhotos(prev=>{
    //             return [...prev,...filenames];
    //         })
    //     })      
    // }
   
    async function savePlace(ev){
        ev.preventDefault();
        const placeData={title,address,addedPhotos,
            description,perks,extraInfo,
            startbid,endbid,maxbid}
        if(id){
            //updaye
            await axios.put('/places',{
                id,...placeData
                
                })
               setRedirect(true)
        }
        else{
            //newoka
            
            await axios.post('/places',placeData)
              setRedirect(true)
        }

    }
    function redirections(ev){
        ev.preventDefault();
        setRedirect(true)}
    if (redirect) {
        return <Navigate to={'/account/places'}/>
    }
    return(
        
        <div>
        <AccountNav/>
                <form onSubmit={savePlace}>
                {preInput('Title','Title for your place, should be catchy and short as in advertisement')}
                
                    <input type='text' placeholder="title, for example : My Lovely apartment" value={title} onChange={ev=>setTitle(ev.target.value)}/>
                {preInput('Address','Address to your Places')}
                    
                    <input type="text" placeholder="address" value={address} onChange={ev=>setAddress(ev.target.value)}/>
                {preInput('Photos','more=better')}
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
                {preInput('Description','description of the place')}
                
                    <textarea value={description} onChange={ev=>setdescription(ev.target.value)}/>
                {preInput('Perks','select all the perks')}
                    
                    <Perks Selected={perks} onChange={setPerks}/>
                {preInput('Extra Info','Shape, type, etc')}
                    
                    <textarea value={extraInfo} onChange={ev=>setExtraInfo(ev.target.value)}/>
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
                    <button className="primary my-4" >Save</button>
                </form>
            </div>
    )
}