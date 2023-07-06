import { createSlice } from "@reduxjs/toolkit";


const globalSearchHide=createSlice({

    name: 'searchHide',
    initialState:{
        hideSearch: false,
        searchValue:'',
    },
    reducers :{
        hideSearch:(state,action)=>{
          state.hideSearch=action.payload;
        },
        updateSearchVal:(state,action)=>{
            state.searchValue=action.payload;

        }
    }
})

export const {hideSearch,updateSearchVal} =globalSearchHide.actions;

export default globalSearchHide.reducer;