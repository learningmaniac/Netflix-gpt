import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
      name:'movies',
      initialState:{
         nowPlayingMovies:null,
         trailer:null,
         PopularMovies:null,
         TopRatedMovies:null,
         UpComingMovies:null,
      },
      reducers:{
          addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
          },
          addTrailer:(state,action) => {
            state.trailer = action.payload;
          },
          addPopularMovies:(state,action) => {
            state.PopularMovies = action.payload;
          },
          addTopRatedMovies:(state,action) => {
            state.TopRatedMovies = action.payload;
          },
          addUpComingMovies:(state,action) => {
            state.UpComingMovies = action.payload;
          }
      }
});


export const {addNowPlayingMovies,addTrailer,addUpComingMovies,addTopRatedMovies,addPopularMovies} = movieSlice.actions;

export default movieSlice.reducer;