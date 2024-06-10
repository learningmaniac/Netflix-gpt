import React from 'react'
import { IMG_CDN_URL } from '../Contants'

const MovieCart = ({posterPath}) => {
  return (
    <div className='w-[300px] pr-4'>
        <img alt='Movie Cart'
        src={IMG_CDN_URL+posterPath}
        />
    </div>
  )
}

export default MovieCart