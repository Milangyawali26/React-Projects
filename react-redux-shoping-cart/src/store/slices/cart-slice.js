//create slice 

//initialize the initial state
//slice  --> name , mention the initail state  , actions 


import {createSlice} from '@reduxjs/toolkit'


const initialState =[]

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{

        addToCart(state,action){
            console.log(action);
            state.push(action.payload);
        },
        removeFromCart(state,action){
             return state.filter((item)=> item.id!== action.payload);
            
        }
    },
});


export const {removeFromCart} = cartSlice.actions;
export const {addToCart} =cartSlice.actions;

export default cartSlice.reducer;
