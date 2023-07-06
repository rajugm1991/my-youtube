import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import globalSearchSlice from "./globalSearchSlice";
import searchSlice from "./searchSlice";


const store=configureStore({
    reducer:{
        app:appSlice,
        search: searchSlice,
        chat:chatSlice,
        searchHide:globalSearchSlice
    }
});


export default store;