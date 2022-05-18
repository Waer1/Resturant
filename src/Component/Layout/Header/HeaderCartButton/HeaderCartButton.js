import CartIcon from "../../../UI/Card/CartIcon";
import classes from "./HeaderCartButton.module.css"
import {cartlay , CartContext } from "../../../../Store/Card-Context"
import { useContext } from "react";

const HeaderButton = props => {
    const isOpen = useContext(cartlay);
    const cartctx = useContext(CartContext);
    const totalofMeals = cartctx.items.reduce( ( num , cur ) => { return num + cur.amount } , 0);

return <button className={classes.button} onClick={()=>{ isOpen.openCart(); }}>
    <span className={classes.icon}> <CartIcon/> </span>
    <span> Your Cart</span>
    <span className={classes.badge} > { totalofMeals } </span>

    </button>
}


export default HeaderButton;