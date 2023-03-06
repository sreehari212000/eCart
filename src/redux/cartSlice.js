import { createSlice } from "@reduxjs/toolkit";



const preservedState = JSON.parse( localStorage.getItem('cart') )

const initialState = preservedState ||  { 
    cartItems: [],
    noOfCartItems: 0,
    totalMoney: 0
    
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const doesItemExist = state.cartItems.find((item)=>item.id === action.payload.id)
            if(doesItemExist){
                state.cartItems.map((item)=>{
                    if(item.id === action.payload.id){
                        item.quantity++
                    }
                })
                state.noOfCartItems++
            }else{
                state.cartItems.push(action.payload)
                state.noOfCartItems++
            }
            localStorage.setItem('cart', JSON.stringify(state))
        },
        removeItem: (state, action)=>{
            state.cartItems =  state.cartItems.filter((item)=>{
                if(item.id === action.payload){
                    state.noOfCartItems -= item.quantity
                }
            return item.id !== action.payload}
            )
            localStorage.setItem('cart', JSON.stringify(state))
        },
        toggleItems: (state, action)=>{
            if(action.payload.act === 'INCREMENT'){
                state.cartItems.map((item)=>{
                    if(item.id === action.payload.id){
                        item.quantity++;
                        state.noOfCartItems++
                    }
                })
            }else{
                state.cartItems.map((item)=>{
                    if(item.id === action.payload.id){
                        item.quantity--
                        state.noOfCartItems--
                    }
                })
            }
            localStorage.setItem('cart', JSON.stringify(state))
        },
        clearCart: (state)=>{
            state.cartItems = []
            state.noOfCartItems = 0
            localStorage.clear('cart')  
            
        },
        calculateTotal: (state)=>{
            state.totalMoney = state.cartItems.reduce((total, item)=>{
                return total + item.price * item.quantity
            }, 0)
        }
    }
})

export const {addToCart, removeItem, toggleItems, clearCart, calculateTotal} = cartSlice.actions
export default cartSlice.reducer