import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function IndexPages() {
  const[places,setPlaces]=useState([]);
  useEffect(()=>{
    axios.get('/places').then(response=>{
      setPlaces(response.data);
    });
  },[]);
  return (<div className="mt-8 h-40 w-40 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
  {places.length > 0 && places.map(place => (
    <Link to={'/place/'+place._id}>
      <div className="">
      {place.Photos.length>0&&(
                  <img className="" src={"http://localhost:4000/uploads/"+place.Photos[0]} alt=""/>

                )}
      </div>
      <h2 className="font-bold">{place.address}</h2>
      <h3 className="text-sm text-gray-500">{place.title}</h3>
      <div className="mt-1">
        <span className="font-bold">${place.price}</span> per night
      </div>
    </Link>
  ))}
</div>

  )
}

export default IndexPages