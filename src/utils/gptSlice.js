import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
     name:'gpt',
     initialState:{
        showButton:false,
        gptMovies:null,
        gptMoviesName:null,
     },
     reducers:{
        toggleshowButton:(state) => {
           state.showButton = !state.showButton;
        },
        addGptMovieResult:(state,action) => {
           const {MovieNames, tmdbResults} = action.payload;
           state.gptMovies = tmdbResults;
           state.gptMoviesName = MovieNames;
        }
     }
})

export const {toggleshowButton,addGptMovieResult} = gptSlice.actions;

export default gptSlice.reducer;