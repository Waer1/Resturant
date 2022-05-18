import react from "react";


export const CartContext = react.createContext(
    {
        items :[],
        totalamount : 0,
        addItem : (item) =>{} ,
        removeItem : (id) => {}
    }
)


export const cartlay = react.createContext(
    {
        isOpen : false,
        openCart : ()=>{},
        closeCart : ()=>{}
    }
);
