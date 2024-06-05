import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const [isSignForm,setisSignForm] = useState(true);
  
  const toggleSignform = () => {
        setisSignForm(!isSignForm);
  };
   
  return (
    <div>

         <Header />
         <div className='absolute'>
           <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg'
            alt='Netflix-background-image'
           />
         </div>
         <form className='absolute p-12 bg-black w-4/12 mx-auto my-36 right-0 left-0 text-white rounded-md bg-opacity-60'>
            <h1 className='font-bold text-3xl py-4'>
              {isSignForm ? 'Sign in' : 'Sign up'}
            </h1>
            { !isSignForm && <input type='text'
             placeholder='Name'
              className='p-2 mr-4 mt-4 mb-4 w-full bg-gray-700'
              />}
            <input type='text'
             placeholder='Email id or Mobil number' 
             className='p-2 my-4 w-full bg-gray-700'
             />
            <input type='password'
             placeholder='Password'
              className='p-2 mr-4 mt-4 mb-4 w-full bg-gray-700'
              />
          
            <button 
            className='p-4 my-10 bg-red-700 w-full rounded-lg '
            >
            {isSignForm ? 'Sign in' : 'Sign up'}
            </button>
            <p className='py-4 hover:cursor-pointer' onClick={toggleSignform}>{isSignForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign up Now'}</p>
         </form>
         
        
         
    </div>
  )
}

export default Login;