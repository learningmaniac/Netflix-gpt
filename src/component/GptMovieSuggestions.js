import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
const gpt = useSelector((store) => store.gpt);
const {gptMovies,gptMoviesName} = gpt;
if(!gptMoviesName) return;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-70'>
         <div>
            {gptMoviesName.map((movie,index) => 
            <MovieList
             key={movie}
             title={movie}
              movies={gptMovies[index]} 
            />)}
            
         </div>
    </div>
  )
}

export default GptMovieSuggestions;