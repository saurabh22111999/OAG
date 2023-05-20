import { useState } from "react";
import Perks from "../Perks";
import AccountNav from "../AccountNav";
import { Navigate } from "react-router-dom";

export default function PlacesFormPage(){
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
       setRedirect(true)

    }
    if (redirect) {
        return <Navigate to={'/account/places'}/>
    }
    return(
        
        <div>
        <AccountNav/>
                <form onSubmit={addNewArt}>
                {preInput('Title','Title for your place, should be catchy and short as in advertisement')}
                
                    <input type='text' placeholder="title, for example : My Lovely apartment" value={title} onChange={ev=>setTitle(ev.target.value)}/>
                {preInput('Address','Address to your Places')}
                    
                    <input type="text" placeholder="address" value={address} onChange={ev=>setAddress(ev.target.value)}/>
                {preInput('Photos','more=better')}
                <div className="flex gap-2">
                        <input value={photoLink} onChange={ev=>setPhotoLink(ev.target.value)} type="text" placeholder={'Add using a link.......jpg'}/>
                        <button onClick={addPhotoByLink} className="bg-gray-200 px-4 rounded-2xl"> Add&nbsp; Photo</button>
                    </div>
                    
                    <div className=" mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {addedPhotos.length>0 && addedPhotos.map(link=>(

                        <div className="h-32 flex">
                        
                        <img className="rounded-2xl w-full object-cover" src={'http://localhost:4000/uploads/'+link}/>
                        </div>
                    )
                    )}
                    <label className=" h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
                    <input type="file" multiple className="hidden" onChange={uploadPhoto}/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                    Upload
                    </label>
                    </div>
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
                    <button className="primary my-4" onClick={setRedirect(true)}>Save</button>
                </form>
            </div>
    )
}