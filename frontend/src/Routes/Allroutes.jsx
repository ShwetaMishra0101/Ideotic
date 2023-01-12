import React from 'react';
import { Route, Routes } from "react-router-dom";

import AllBreeds from '../Pages/AllBreeds';
import BreedsImage from '../Pages/BreedsImage';
import Home from '../Pages/HomePage/Home';
import Login from '../Pages/Login_Signup/Login';
import SignUp from '../Pages/Login_Signup/SignUp';


import styled from './AllRoutes.module.css'

const Allroutes = () => {
    return <div>
        <div >
				<Routes>
					{/* <Route path='/' element={<Home/>}/> */}
					<Route  path='/' element={<SignUp />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/breedImage' element={<BreedsImage />} />
					<Route exact path='/breedList' element={< AllBreeds/>} />
					
					{/* <Route path='*' element={<Error />} /> */}
				</Routes>
			</div>
    </div>;
}



export default Allroutes;