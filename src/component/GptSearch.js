import React from 'react'
import GptBar from './GptBar';
import { useSelector } from 'react-redux';

const GptSearch = () => {
  const lang = useSelector(store => store.config.lang);
  return (
    <div className="">
      <GptBar/>
      GptMovieSuggestion
    </div>
  )
}

export default GptSearch;