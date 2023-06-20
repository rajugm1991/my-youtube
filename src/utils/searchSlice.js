import { createSlice } from "@reduxjs/toolkit";



const searchSlice=createSlice({
    name :'search',
    initialState : {},
    reducers : {
        storeSearchCache:(state,action)=>{
            state=Object.assign(state,action.payload)
        }
    }
})


export const {storeSearchCache} =searchSlice.actions;

export default searchSlice.reducer;