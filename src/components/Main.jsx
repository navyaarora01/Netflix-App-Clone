import axios from 'axios'
import React, { useInsertionEffect } from 'react'
import { useState } from 'react'
import requests from '../Request'

const Main = () => {
     const [movies,setMovies] = useState([])

     useInsertionEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data)
        })
     })
  return (
    <div>Main</div>
  )
}

export default Main
