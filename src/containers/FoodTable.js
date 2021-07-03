import MealContainer from './MealContainer'

const renderMeals = (meals = []) => {
  return meals.map( (meal) => <MealContainer props={meal} /> )
}

export default function FoodTable(props){
    return(
      <table  width={50}>
        {renderMeals()}
      </table>
    )
}

