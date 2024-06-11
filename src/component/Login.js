import React, { useState, useRef } from 'react'
import Header from './Header';
import validates from '../utils/validates';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { BG_IMG } from '../Contants';


const Login = () => {

  const [isSignForm,setisSignForm] = useState(true);
  const [ErrorMessage,setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  
  const toggleSignform = () => {
        setisSignForm(!isSignForm);
  };

  const validate_form = () => {
        
       const message = validates(email.current.value,password.current.value);
       setErrorMessage(message);

       if(message) return; // return if there is a error

       if(!isSignForm){

        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            updateProfile(user, {
              displayName: name.current.value,
            }).then(() => {
              // Profile updated!
              // ...

            }).catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
         
            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+' '+errorMessage);
            // ..
          });
          
       }
       else{
         
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        })
        .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMessage(errorCode+' '+errorMessage);
        });
          
       }

  }

   
  return (
    <div>

         <Header />
         <div className='absolute'>
           <img src={BG_IMG}
            alt='Netflix-background-image'
           />
         </div>
         <form onSubmit={(e) => {e.preventDefault()}} className='absolute p-12 bg-black w-4/12 mx-auto my-36 right-0 left-0 text-white rounded-md bg-opacity-60'>
            <h1 className='font-bold text-3xl py-4'>
              {isSignForm ? 'Sign in' : 'Sign up'}
            </h1>
            { !isSignForm && <input type='text'
              placeholder='Full Name'
              className='p-2 mr-4 mt-4 mb-4 w-full bg-gray-700'
              ref={name}
              />}
            <input type='text'
             placeholder='Email id or Mobil number' 
             className='p-2 my-4 w-full bg-gray-700'
             ref={email}
             />
            <input type='password'
             placeholder='Password'
             className='p-2 mr-4 mt-4 mb-4 w-full bg-gray-700'
             ref={password}
              />

            <p className='font-bold font-light text-red-500'>{ErrorMessage}</p>
          
            <button 
            className='p-4 my-10 bg-red-700 w-full rounded-lg '
            
            onClick={validate_form}
            >
            {isSignForm ? 'Sign in' : 'Sign up'}
            </button>
            <p className='py-4 hover:cursor-pointer' onClick={toggleSignform}>{isSignForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign up Now'}</p>
         </form>
         
        
         
    </div>
  )
}

export default Login;