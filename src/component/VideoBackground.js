import { useSelector } from 'react-redux';
import useGetMovieTrailer from '../hooks/usegetMovieTrailer';

const VideoBackground = ({movieid}) => {

  //console.log(movieid);


  
  useGetMovieTrailer(movieid);

  const trailerVideo = useSelector(store => store?.movies?.trailer);

  return (
    <div className='w-screen'>
       <iframe
          className='w-screen aspect-video no-scrollbar'
          src={"https://www.youtube.com/embed/"
            +trailerVideo?.key+
            "?autoplay=1&mute=1"
           }
           title="YouTube video player"
           allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           
        >     
        </iframe>
    </div>
  )
}

export default VideoBackground;