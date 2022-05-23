import { configureStore } from "@reduxjs/toolkit";
import imgSlice from './img-slice';


const store = configureStore({
    reducer: {
        img: imgSlice.reducer,
    }
});

export default store;