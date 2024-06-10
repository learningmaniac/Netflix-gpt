import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './Login';
import Bowers from './Bowers';
import { RouterProvider } from 'react-router-dom';




const Body = () => {


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