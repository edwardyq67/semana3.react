import axios from 'axios';
import React, { useState } from 'react';


const Busqueda = ({setLocation} ,{searchType}) => {
    const [id,setId]=useState("")

    const press=()=>{
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res=>setLocation(res.data))
        console.log(setLocation)
    }
    
    return (

        <div>
            <form action="">
                <input type="text" placeholder='id' value={id} onChange={e=>setId(e.target.value)}   />
                <button onClick={searchType}><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    );
};

export default Busqueda;