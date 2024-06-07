import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './Login';
import Bowers from './Bowers';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {  adduser, removeuser } from '../utils/userSlice';



const Body = () => {

  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([ 
    {
       path:'/',
       element: <Login/>
    },
    {
       path:'/Bowers',
       element:<Bowers/>
    }
    
  ]);

  
  return (
     <>
     <RouterProvider router={appRouter}/>  
     </>
      
  )

  
  
}





export default Body;