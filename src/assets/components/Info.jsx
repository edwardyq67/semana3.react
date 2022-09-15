import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Info = ({list}) => {
    const[personajes,setPersonajes]=useState({});
    
    useEffect(()=>{
        axios.get(list)
        .then(res=>setPersonajes(res.data))
    },[])
    console.log(personajes)
    
    return (
        <div className='infoTotal'>
            <h3><b>{personajes.name}</b></h3> 
            <img src={personajes.image} alt="" />
            <div className='infoPersonaje'>
                
                <h3>{personajes.status}</h3>
                <h3><b>ORIGIN: </b>{personajes.origin?.name}</h3>
                <h3><b>EPISODE LENGHT: </b>{personajes.episode?.length}</h3>
            </div>
            
        </div>
    );
};

export default Info;