import MealContainer from './MealContainer'



export default function FoodTable({meals}){

  const renderMeals = (meals = []) => {
    return meals.map( (meal) => <MealContainer meal={meal} /> )
  }

  return(
    <table width={600}>
      {renderMeals(meals)}
    </table>
  )
}

