import classes from "./Cart.module.css"
import Module from "../UI/modal/modal"
import { useContext } from "react";
import { cartlay , CartContext  } from "../../Store/Card-Context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
const cartctx = useContext(CartContext);

const removeItem = (id) =>{ 
    cartctx.removeItem(id)  
}
const increseItem = (item) =>{
    let addition = {...item , amount :1}
    cartctx.addItem(addition)  
}


    const lay =
    ( <ul className={ classes['cart-items'] } >
        { cartctx.items.map(item => { return <CartItem onRemove={removeItem.bind(null , item.id)} onAdd={ increseItem.bind(null , item) } key={item.id} name={item.name} price={item.price} amount={item.amount} />  }  )  }
    </ul> );


const isOpen = useContext(cartlay);
    return <Module>
        {lay}
        <div className={classes.total} >
            <span >Totla Amount</span>
            <span >${cartctx.totalamount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={isOpen.closeCart} > Close</button>
           { cartctx.totalamount > 0 &&  <button className={classes.button}> Order </button> }
        </div>
    </Module>
}

export default Cart