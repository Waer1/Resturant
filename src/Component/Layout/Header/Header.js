import react from "react";
import classes from "./Header.module.css"
import mealImg from "../../../Attached/meals.jpg"
import HeaderButton from "./HeaderCartButton/HeaderCartButton";

const Header = () => {


    return(
        <frameElement>            
            <header className={classes.header}>
                <h1>ReactMeal</h1>
                <HeaderButton />
            </header>
            <div className={classes['main-image']} > 
                <img src={mealImg} alt="full tabel of foods " />
            </div>
        </frameElement>
    );
}

export default Header;
