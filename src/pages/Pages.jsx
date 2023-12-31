import React from 'react'
import Home  from './Home'
import { Routes,Route} from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';

const Pages = () => {
  return (
    <div className='pages'>     
        <Routes>
            <Route path='/cuisine/:type' element={<Cuisine/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/searched/:search' element={<Searched/>}></Route>
            <Route path="/Recipe/:id" element={<Recipe/>}></Route>
        </Routes>
    </div>
  )
}

export default Pages;
