import react from "react";
import classes from "./Input.module.css"


const Input = react.forwardRef( ( props , ref ) =>{

    return <div className={classes.input} >
        <label htmlFor={props.input.id} >{props.label}</label>
        <input id={props.input.id} ref={ref}  {...props.input} />
    </div>

}
)
export default Input;