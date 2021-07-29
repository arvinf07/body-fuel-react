import MealContainer from './MealContainer'
import { useState, useEffect } from "react";


export default function FoodTable({meals}){
  const [foods, setFoods] = useState([])
  const [foodForm, setFoodForm] = useState(null)

  useEffect(() => fetchFoods(), [])

  const renderMeals = (meals = []) => {
    return meals.map( (meal) => {
      // To keep track of which meal is about to add a food
      if(foodForm === meal.name){
        return <MealContainer setFoodForm={setFoodForm} foodForm={true} foods={foods} meal={meal} /> 
      }else{
        return <MealContainer setFoodForm={setFoodForm} foodForm={false} foods={foods} meal={meal} /> 
      }
    })
  }
    
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



