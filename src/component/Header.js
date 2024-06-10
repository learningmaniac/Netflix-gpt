import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { Netflix_log } from '../Contants';

const Header = () => {

  const user = useSelector(store => store.user); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
       dispatch(removeuser);
    }).catch((error) => {
      // An error happened.
    });
  }

  
  useEffect(()=>{
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const {displayName} = auth.currentUser;
        dispatch(adduser({displayName:displayName}));
        navigate("/Bowers");
       
      } else {
        
        dispatch(removeuser);
        navigate("/");
        // User is signed out
        // ...
    
      }
    });
  },[]);



  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-screen z-10'>
       <img src={Netflix_log}
         alt='Netflix-log'
         className='w-44'
        />
        <div className='flex m-5 justify-between w-96'>
        {user && <p className='font-semibold text-purple-900'>{user.displayName}</p> }
        {user && <button onClick={handleSignOut} className='font-bold text-white border-solid h-10 w-20 bg-black rounded-lg'>Sign_out</button>}
        </div>
    </div>
  )
}

export default Header