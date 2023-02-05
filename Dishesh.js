import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import Datalist from './Data'
export default function Dishesh() {
    const [datas] = useState(Datalist)
    const [inputs,setInput] = useState('')
    
    console.log(datas)
         
    const handleInputs = (e) =>{
      setInput(e.target.value)
    }
     return (
      <div>
        <div className='p'>
        <input type='text' value={inputs} onChange={handleInputs} className='input' placeholder='search your best food'/>
      </div>
    <div style={{display:'flex',flexWrap:'wrap',padding:'10px',margin:'10px'
    }}>
     
      {datas.filter((val)=>{
        if(inputs == ''){
         return val
        }else if(val.name.toLocaleLowerCase().includes(inputs.toLocaleLowerCase())){
          return val
        }
      }).map((item)=>{
         return(
            <div style={{border:'2px solid black' ,margin:'1px',padding:'5px'}} key={item.id}>
         <Link to={`/${item.id}`}>   <li><img src={item.image} width='280px' height='200px'/> </li></Link>
                 <Link to={`/${item.id}`}> Read More</Link>
                 <h3>{item.name}</h3>
           </div>
         )
      })}
    </div>
    </div>
)
    }