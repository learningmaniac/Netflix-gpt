import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Header = () => {

  const user = useSelector(store => store.user); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
        dispatch(removeuser);
        navigate("/");
  }

  
  useEffect(()=>{
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const {displayName} = auth.currentUser;
        dispatch(adduser({displayName:displayName}));
        navigate("/Bowers")
       // 
       //console.log(auth);
        // ...
      } else {
        
        dispatch(removeuser);
        navigate("/");
        // User is signed out
        // ...
    
      }
    });
  },[]);

  console.log(user);

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-screen'>
       <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
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