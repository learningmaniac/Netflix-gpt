import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../Contants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {

 const dispatch = useDispatch();
  
 const getNowPlayingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTION);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
 }

 useEffect(()=>{
     getNowPlayingMovies();
 },[]);

};

export default useNowPlayingMovies;