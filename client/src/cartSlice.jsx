import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({

      name:"mycart",
      initialState:{
        cart:[]
      },
      reducers:{
         addToCart:(state, actions)=>{
            console.log(actions.payload);
            state.cart.push(actions.payload);
         },

         qntyInc:(state, actions)=>{
            
            for (var i=0; i<state.cart.length; i++){
                if (state.cart[i].id==actions.payload.id)
                {
                    state.cart[i].qnty++;
                }
            }
         }
      }
})

export const {addToCart, qntyInc}  = cartSlice.actions;
export default cartSlice.reducer;