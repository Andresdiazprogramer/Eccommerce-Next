import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addToCart: (state,action)=>{
            const newProduct = action.payload
            state.items.push(newProduct)
        },
        removeFromCart: ()=>{

        }
    }
})

const cartReducer = cartSlice.reducer

export default cartReducer