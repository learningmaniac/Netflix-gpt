import React, { useEffect } from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if(!movies) return;
  
  const {original_title,overview} = movies[0];

 const {id} = movies[0];
 
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieid={id}/>   
    </div>
  )
}

export default MainContainer