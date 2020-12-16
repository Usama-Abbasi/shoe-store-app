import React,{createContext,useReducer} from 'react';
import CartReducer from './cartReducer';
const initialState=[]
export const CartContext=createContext(initialState);

export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(CartReducer,initialState);
    //Actions
    function addCart(productId){
        console.log(productId);
        dispatch({
            type:'ADD_TO_CART',
            payload:productId
        });
    }
    function removeCart(productId){
        dispatch({
            type:'ReMOVE_FROM_CART',
            payload:productId
        })
    }
    return (<CartContext.Provider value={{
        productId:state,
        addCart,
        removeCart
        }}>
        {children}
    </CartContext.Provider>)
}




