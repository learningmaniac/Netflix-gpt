import React, { useRef } from 'react'
import { API_OPTION, BG_IMG } from '../Contants'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/langContant';
import openai from '../utils/openai';
import { addGptMovieResult } from '../utils/gptSlice';

const GptBar = () => {
  const langkey = useSelector(store => store.config.lang);
  const searchtext = useRef(null);
  const dispatch = useDispatch();

  // search movie in tmdb
  const searchMovieTMDB = async (movie_name) => {
        
        const data = await fetch("",API_OPTION);
        const json = await data.json();
        return json.results;
        
  }
  
  const handleGptSearchClick = async() => {
        // Make an api call to openai(gpt api) get movie result
        // We have to tell gpt in which format we want the result
        const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query"+searchtext.current.value+".only give me name of 5 movies,comman seperated like the example result given ahead. Example result: Gadar,sholay,Don,Golmaal,Koi Mil Gaya";
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo', // this will throw error because we are calling the api form client side.
          // If you want to allow add dangerouslyAllowBrowser:true in openai
        });
        
        // Now we will search the movies on search api of tmdb this give me detail about movies

        if(!gptResults.choices){/** error Handling */}
        // Andaz Apna Apna, Hera Pheri,Chupke Chupke,Jaane Bhi Do Yaaro,Padosan
        const gptMovies = gptResults.choices?.[0]?.messages?.content.split(","); // split will return the array of movies splited by ","
        //[ "Andaz Apna Apna", "Hera Pheri" , "Chupke Chupke","Jaane Bhi Do Yaaro","Padosan"]

        // For each movie I will search TMDB API
        const promiseArray = gptMovies?.map((movie)=>searchMovieTMDB(movie)); // we are calling an async function so result will take time.And we will get promise as result. 
        // Promise array

        const tmdbResults = Promise.all(promiseArray); // This take the array of Promise and resolve the all promise,this will only give result when all promise are resolved 

        dispatch(addGptMovieResult({tmdbResults:tmdbResults,MovieNames:gptMovies}));// add the movies to store
  }

  return (
    <div className='relative  flex justify-center'>
         <div className='absolute -z-10'>
           <img src={BG_IMG}
            alt='Netflix-background-image'
           />
         </div>-
        <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg mt-[10%]'
              onSubmit={(e) => e.preventDefault} // 
             >
            <input type="text" placeholder={lang[langkey].gptSearchBarPlaceHolder}
                   className='p-4 m-4 col-span-9'
                   ref={searchtext}
            />
            <buttom className="col-span-3 m-4 p-4 pl-14 bg-red-700 text-white rounded-lg"
                    onClick={handleGptSearchClick}
            >
                {lang[langkey].search}
            </buttom>
        </form>
    </div>
  )
}

export default GptBar