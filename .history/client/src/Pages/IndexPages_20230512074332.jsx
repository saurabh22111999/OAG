import axios from 'axios'
import React, { useEffect } from 'react'


function IndexPages() {
  useEffect(()=>{
    axios.get('/places').then(response=>{
      
    })
  })
  return (<div>
      index page here

    </div>

  )
}

export default IndexPages