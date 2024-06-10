import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies';
import useGetUpComingMovies from '../hooks/useGetUpComingMovies';


const Bowers = () => {

  useNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpComingMovies();
 
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/*
       MainContainer
        -VideoBackground
        -VideoTitle
       Secondary Container
        -MovieList * n
         -cards * n
      */}
    </div>
  )
}

export default Bowers;