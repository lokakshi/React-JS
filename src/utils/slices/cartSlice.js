import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items:[]
    },
    reducers: {
        // AddItem is "Action" and the function is its respective reducer function
        //  reducer function get to parameter the state which is inital state and action 
        addItem: (state, action) => {
            // since we have accces to state this we took the initial state and push the data coming from action
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
            
        },
        clearItems: (state, action) => {
            state.items.length = 0;
        }
        
    }
})
export const { addItem ,removeItem ,clearItems} = cartSlice.actions;
export default cartSlice.reducer

// createSlice return a object like below to cartSlice 
// {
//   name: "cart",
//   reducer: function reducer(state, action) {},
//   actions: {
//     addItem,
//     removeItem,
//     clearItems
//   }
// }

// that why we are exporting reducers and actions 













// createSlice function has some configuration 
// 1. it takes name of the Slice 
// 2. initialState of this Slice 
// 3. The reducer function that will be required to update the slice 
// 4. reducer has action with there respective reducer function just like above
// Now we need to add/connect this action and reducer to the redux store 
// The syntax is given by redux toolkit 