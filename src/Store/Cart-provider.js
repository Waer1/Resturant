import { CartContext , cartlay } from "./Card-Context";
import { useState , useReducer } from "react";

const defulatReducer = {
    items :[],
    totalamount : 0,
}

const cartreducer= ( state , action) =>{

    if(action.type === 'ADD'){
    let newItem = action.item 
    const updatedtotalAmount = state.totalamount + newItem.amount * newItem.price;
    let updatedstate;
    let index = state.items.findIndex( x => x.name === newItem.name )
    if(index === -1 ){//new item
        updatedstate = [...state.items , newItem];
    } else
    {
        //old item
        let newamount = state.items[index].amount + newItem.amount;
        let updatedItem = {
            ...state.items[index] , amount : newamount
        }
        updatedstate = [...state.items];
        updatedstate[index] = updatedItem
    }





        return {
            items : updatedstate ,
            totalamount :updatedtotalAmount
        }


    }

    if(action.type === 'REMOVE')
    {
        let index = state.items.findIndex(x => x.id === action.id )
        let newItemData = {...state.items[index] , amount : state.items[index].amount - 1 };
        const updatedtotalAmount = state.totalamount - state.items[index].price;
        const updatedstate = [...state.items];
        updatedstate[index]=newItemData
        if( updatedstate[index].amount < 1 ) updatedstate.splice(index ,1)

        return {
            items : updatedstate ,
            totalamount :updatedtotalAmount
        }   
    }
    

    
    return defulatReducer;
}

 const CartRrovider =(props)=>{

    const [cartState, dispatchCart] = useReducer(cartreducer, defulatReducer );


    const addItemHandler = (item) =>{ dispatchCart({type: "ADD" , item : item}) }
    const removeItemHandler = (id) =>{ dispatchCart({type: "REMOVE" , id : id}) }
    const CartContextintial = {
            items :cartState.items,
            totalamount : cartState.totalamount,
            addItem : addItemHandler ,
            removeItem : removeItemHandler  
        }

    return <CartContext.Provider value={CartContextintial} >{props.children}</CartContext.Provider>
}




export const Layprovider = (props) =>{

    const [isopen, setopen] = useState(0);

    const opencartHandler = () =>{setopen(1);}
    const closecartHandler = () =>{ setopen(0); }

    const lyinitial = {
        isOpen :isopen,
        openCart : opencartHandler,
        closeCart : closecartHandler
    }

    return <cartlay.Provider value={lyinitial} >{props.children}</cartlay.Provider>
}  

export default CartRrovider;