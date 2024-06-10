import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../Contants";
import { addUpComingMovies } from "../utils/movieSlice";

const useGetUpComingMovies = () => {

 const dispatch = useDispatch();
  
 const getUpComingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTION);
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));
 }

 useEffect(()=>{
     getUpComingMovies();
 },[]);

};

export default useGetUpComingMovies;