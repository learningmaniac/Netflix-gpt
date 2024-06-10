import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailer } from '../utils/movieSlice';
import { API_OPTION } from '../Contants';

const useGetMovieTrailer = (movieid) => {

    //console.log(movieid);
      
    const dispatch = useDispatch();

    const getMovieTrailer = async() => {
          
          const data = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, API_OPTION);
          const json = await data?.json();
          const trailer = json.results?.filter((video) => video?.type === "Trailer");
        //  console.log(trailer)
          const filter = trailer.length ? trailer[0] : json.results[0];
        //  console.log(filter);
          dispatch(addTrailer(filter));
   
    }
  
    useEffect(()=>{
       getMovieTrailer();
    },[])
  

};

export default useGetMovieTrailer;