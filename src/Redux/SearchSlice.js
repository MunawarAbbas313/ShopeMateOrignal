import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: "search",
    initialState:{
        term :"",
    },
    reducers:{
        setSearch:(state, action)=>{
            state.term = action.payload;
        }
    }
});
export const {setSearch} = SearchSlice.actions;
export default SearchSlice.reducer;