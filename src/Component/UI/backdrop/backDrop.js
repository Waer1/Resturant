import classes from "./BackDrop.module.css"
import { useContext } from "react";
import { cartlay } from "../../../Store/Card-Context";




const Backdrop = (props) =>{
const isOpen = useContext(cartlay);
    return <div className={classes.backdrop} onClick={isOpen.closeCart} ></div> }


export default Backdrop