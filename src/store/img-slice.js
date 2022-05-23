import { createSlice } from '@reduxjs/toolkit'

const imgSlice = createSlice({
    name: 'img',
    initialState: {
        imgIsVisible: false,
        imgURL: ''
    },
    reducers: {
        showImage(state, action) {
            console.log(action);
            state.imgIsVisible = true;
            state.imgURL = action.payload.img
        },
        hideImage(state) {
            state.imgIsVisible = !state.imgIsVisible;
        }
    }
});

export const imgAction = imgSlice.actions;

export default imgSlice;