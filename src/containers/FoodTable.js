import MealContainer from './MealContainer'
import { useState, useEffect } from "react";


export default function FoodTable({meals}){
  const [foods, setFoods] = useState([])

  const renderMeals = (meals = []) => {
    return meals.map( (meal) => <MealContainer foods={foods} meal={meal} /> )
  }
  

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
    </table>
  )

}



