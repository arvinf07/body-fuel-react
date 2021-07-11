import MealContainer from './MealContainer'



export default function FoodTable({meals}){

  const renderMeals = (meals = []) => {
    console.log(meals)
    return meals.map( (meal) => <MealContainer props={meal} /> )
  }

  return(
    <table width={50}>
      {renderMeals(meals)}
    </table>
  )
}

