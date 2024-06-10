import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../Contants";
import { addNowPlayingMovies, addPopularMovies } from "../utils/movieSlice";

const useGetPopularMovies = () => {

 const dispatch = useDispatch();
  
 const getPopularMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTION);
        const json = await data.json();
        console.log(json.results);
        dispatch(addPopularMovies(json.results));
 }

 useEffect(()=>{
     getPopularMovies();
 },[]);

};

export default useGetPopularMovies;