import calsses from "./AvaalableMeals.module.css"
import Card from "../UI/Card/Card";
import Meal from "./ItemMeal/ItemMeal";

const AvalableMeals = () =>{
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];

      const MealsList = (
           <ul>
                { DUMMY_MEALS.map( (meal) => { return  <Meal key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} /> } ) }
            </ul>
             )

      return <section className={calsses.meals} >
          <Card >
            {MealsList}
          </Card>
      </section>

}

export default AvalableMeals;