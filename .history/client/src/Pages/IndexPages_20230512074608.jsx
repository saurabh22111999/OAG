import axios from 'axios'
import React, { useEffect, useState } from 'react'


function IndexPages() {
  const[places,setPlaces]=useState([]);
  useEffect(()=>{
    axios.get('/places').then(response=>{
      setPlaces(response.data);
    });
  },[]);
  return (<div>
      {places.length>0 &&places.map(place=>(
        <div>
        {places.photos?[0]}
          {place.title}
        </div>
      ))}

    </div>

  )
}

export default IndexPages