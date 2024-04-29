import { createSlice } from "@reduxjs/toolkit";

const initialCart = () => {
    const GetCart = typeof window != "undefined" ? window.localStorage.getItem('cart') : false;
    let cart = [];
    if (GetCart) {
        cart = JSON.parse(GetCart);
    }
    return cart;
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: initialCart(),
    },
    reducers: {
        addToCart: (state, action) => {
        }
        ,
        removeFromCart: (state, action) => {
        },
        adjustQuantity: (state, action) => {
        }

    }
})

export const { addToCart, removeFromCart, adjustQuantity } = cartSlice.actions

export default cartSlice.reducer