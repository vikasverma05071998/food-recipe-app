// import React from 'react'
// import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
// import Nexts from './Component/Nexts'
// import Home from './Component/Home'
// export default function App() {
//   return (
//     <div>
//     <Router>
//         <Link to='/'>Home</Link>
//         <Link to='Nexts'>Nextpage</Link>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/Nexts' element={<Nexts/>}/>
//         </Routes>
//   </Router>
//     </div>
//   )
// }

import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Dishesh from './Component/Dishesh'
import Recipes from './Component/Recipes'

export default function App() {
  return (
    <div>
      <div>
        <h1 style={{textAlign:'center', backgroundColor:'gray',
        margin:'0px',color:'red'
      
      }}>Welcome To Food Recipe App</h1>
      </div>
      <Router>
        <Link to='/'><i className="fa fa-arrow-left"></i></Link>
      
        <Routes>
          <Route path='/' element={<Dishesh/>}/>
          <Route path='/:id' element={<Recipes/>}/>
        </Routes>
       </Router>
     </div>
   )
 }