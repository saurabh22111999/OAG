import { useState } from "react";
import { Link, useParams } from "react-router-dom";


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
                    <div className="grid gap-2 mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols6">
                        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox"/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
</svg>

                            <span>Safe Payment</span>

                        </label>
                        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox"/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

                            <span>Free parking</span>

                        </label>
                        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox"/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
</svg>

                            <span>Online</span>

                        </label>
                        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox"/>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
</svg>

                            <span>Pets</span>

                        </label>
                        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox"/>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z" clip-rule="evenodd" />
</svg>

                            <span>Private etrance</span>

                        </label>
                    </div>
                
                    <h2 className="text-2xl mt-4">Extra Info</h2>
                    <p className="text-gray-500 text-sm">shape,type,etc</p>
                    <textarea/>
                    <h2 className="text-2xl mt-4">Bid start and Bid end</h2>
                    <p className="text-gray-500 text-sm">Add bid</p>
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