import  { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../slices/cartSlice"
const store = configureStore({
    reducer: {
        cart:CartReducer
    },
});

export default store;



// Since we have action and reducers from cartSlice we will now add it to store 
// Every store has it's own reducer and that reducer has all the reducers of the slices in the store