import Input from "../../../UI/Input/Input";
import Classes from "./ItemForm.module.css"
import { useRef } from "react";

const ItemForm = (props) => {
    const ref = useRef();


    const submitHandler = (e) =>{
        e.preventDefault();
        const enterdAmount = +ref.current.value;
        props.onAddItem(enterdAmount);   
    }

    return (
         <form className={Classes.form} onSubmit={submitHandler}>
        <Input
        ref = {ref}
        label='Amount'
        input={
        {
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
    }}
/>
        <button >+ Add</button>
    </form>
    )
}
export default ItemForm;