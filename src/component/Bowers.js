import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies';
import useGetUpComingMovies from '../hooks/useGetUpComingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Bowers = () => {

  useNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpComingMovies();

  const gpt = useSelector(store => store.gpt.showButton);
 
  return (
    <div>
      <Header/>
    {
    gpt ? <GptSearch /> :
    <>
    <MainContainer/>
    <SecondaryContainer/>
    </>
    }
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