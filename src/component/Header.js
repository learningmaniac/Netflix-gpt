import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { Netflix_log, SUPPORTED_LANGUAGES } from '../Contants';
import { toggleshowButton } from '../utils/gptSlice';
import lang from '../utils/langContant';
import { changeLang } from '../utils/configSlice';

const Header = () => {

  const user = useSelector(store => store.user); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showButton = useSelector(store => store.gpt.showButton);

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

  const handleGptSearch = () => {
        dispatch(toggleshowButton());
  }

  const handleLanguageChange = (e) => {
        dispatch(changeLang(e.target.value));
  }



  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-screen z-10'>
       <img src={Netflix_log}
         alt='Netflix-log'
         className='w-44'  
        />
        {user && 
        <div className='flex m-5 justify-between w-96'>
         {showButton && <select className='p-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => 
          <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
          )}
         </select>}
         <button className="py-2 px-4 mx-4 py-3 bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearch}
         >{!showButton ? 'GTP Search' : 'Home Page'}</button>
         <button onClick={handleSignOut} className='font-bold text-white border-solid h-10 w-20 bg-black rounded-lg'>Sign_out</button>
        </div>
        }
    </div>
  )
}

export default Header