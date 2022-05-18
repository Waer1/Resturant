import ItemForm from "./ItemForm/ItemForm";
import classes from "./ItemMeal.module.css"
import { CartContext } from "../../../Store/Card-Context";
import { useContext } from "react/cjs/react.development";

const Meal = (props) =>{
    const name = props.name;
    const description = props.description;
    const price = props.price.toFixed(2);

    const cartctx = useContext(CartContext);

    const AddingItem = (enterdAmount) =>{
        const newItem = {id : props.id , name :name , amount : enterdAmount , price : price}
        cartctx.addItem(newItem);
    }


    return <li className={classes.meal} >
        <div>
            <h3> {name}</h3>
            <div className = {classes.description}>{description}</div>
            <div className={classes.price} >${price}</div>
        </div>
        <div>
            <ItemForm id={props.key} onAddItem={AddingItem} />
        </div>
    </li>
}

export default Meal;