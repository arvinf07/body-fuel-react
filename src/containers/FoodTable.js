import MealContainer from './MealContainer'
import { useState, useEffect } from "react";

const renderMeals = (meals = []) => {
  return meals.map( (meal) => <MealContainer meal={meal} /> )
}

export default function FoodTable({meals}){
  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetchFoods()
    console.log(foods)
  }, [])

  return(
    <table width={600}>
      {renderMeals(meals)}
    </table>
  )

  function fetchFoods(){
    fetch('http://127.0.0.1:3000/foods')
    .then(resp => resp.json())
    .then( foods => foods )
    .catch(error => console.log('this went wrong', error))
  }

}



