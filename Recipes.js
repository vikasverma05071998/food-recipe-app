import React from 'react'
import { useParams } from 'react-router-dom'
import Datalist from './Data'
export default function Recipes() {
  let parems = useParams()
  let dataf = Datalist[parems.id -1]; 
  return (
    <div>
        <h2>
          <img src={dataf.image} width='200px' height='150px' style={{marginLeft:'500px'}}/>

         <h2 style={{}}> {dataf.recipe}</h2>
      
        </h2>
    </div>
  )
}