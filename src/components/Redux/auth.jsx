import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    newstudent: localStorage.getItem('newstudent') ? JSON.parse(localStorage.getItem('newstudent')) : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.newstudent = action.payload;
            localStorage.setItem('newstudent', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.newstudent = null;
            localStorage.removeItem('newstudent'); 
        },
    },
});




export const { setCredentials, logout } = authSlice.actions;


export default authSlice.reducer;