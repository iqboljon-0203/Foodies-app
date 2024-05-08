import classes  from "./meals-grid.module.css";
import MealItem from "./meals-item";
const MealsGrid = ({meals}) => {
  return (
    <ul className={classes.meals}>
        {meals.map((item)=>{
            return(
                <li key={item.id}>
                    <MealItem {...item}></MealItem>
                </li>
            )
        })}
    </ul>
  )
}

export default MealsGrid
