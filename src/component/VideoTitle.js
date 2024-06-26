import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video px-6 pt-[10%] md:px-24 absolute text-white bg-gradient-to-r from-black '>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="my-4 md:m-0">
            <button className='bg-white bg-opacity-70 rounded-lg text-black p-4 px-16 text-lg hover:opacity-50'>
             ▶️ Play
            </button>
            <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info..</button>
        </div>
    </div>
  )
}

export default VideoTitle;