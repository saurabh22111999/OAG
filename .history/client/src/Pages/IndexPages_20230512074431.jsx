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
      index page here

    </div>

  )
}

export default IndexPages