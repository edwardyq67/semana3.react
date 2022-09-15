import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import img1 from './img/img1.png'
import './App.css'
import axios from 'axios'
import Busqueda from './assets/components/Busqueda'
import ListMap from './assets/components/ListMap'
import Info from './assets/components/Info'

function App() {
  const[location,setLocation]=useState({})
  const [id,setId]=useState("")
  useEffect(()=>{
    const random=Math.floor(Math.random()*126)+1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
    .then(res=>setLocation(res.data))
  },[])
  console.log(location)
  const searchType = () => {
  axios.get(`https://rickandmortyapi.com/api/location/${id}`)
    .then(res=>setLocation(res.data))
    
  }
  
  return (
    <div className="App">
      <div className='cajaimg'>
        
      </div>
      <div className='info'>
        <h3 className='caja1'><b>NAME : </b>{location.name}</h3>
        <h3 className='caja2'><b>TYPE : </b>{location.type}</h3>
        <h3 className='caja3'><b>DIMENSION : </b>{location.dimension}</h3>
      </div>
      <div className='input'>
      <input type="text" placeholder='id' value={id} onChange={e=>setId(e.target.value)}   />
      <button onClick={searchType}>submit</button>
      </div>
      <ul className='cajaInfo'>
          {
            location.residents?.map(list=>(
              <Info list={list} key={list}/>
            ))

          
          }
      </ul>
    </div>
  )
}


export default App;
