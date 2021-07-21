import MealContainer from './MealContainer'
import NewFoodForm from '../components/NewFoodForm'
import { useState, useEffect } from "react";

const renderMeals = (meals = []) => {
  return meals.map( (meal) => <MealContainer meal={meal} /> )
}

export default function FoodTable({meals}){
  const [foods, setFoods] = useState([])

  useEffect(() => fetchFoods(), [])

  function fetchFoods(){
    fetch('http://127.0.0.1:3000/foods')
    .then(resp => resp.json())
    .then( foods => setFoods(foods) )
    .catch(error => console.log('this went wrong', error))
  }

  return(
    <table width={600}>
      {renderMeals(meals)}
      <NewFoodForm foods={foods} />
    </table>
  )

}



