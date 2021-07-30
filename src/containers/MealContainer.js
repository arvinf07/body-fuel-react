import AddButton from '../components/AddButton'
import NewFoodForm from '../components/NewFoodForm'
import FoodRow from '../components/FoodRow'
import React, {useState} from 'react';




export default function MealContainer({meal, foods, foodForm, setFoodForm}){
  const {name, id} = meal
  const [mealFoods, setMealFoods] = useState(meal.meal_foods)
  console.log(mealFoods)

  const renderMealFoods = ( (mealFoods = []) => {
    return mealFoods.map( (mealFood) => <FoodRow foodData={mealFood}/> )
  })

  const createMealFood = ({food_id, amount}) => {

    const body = {meal: {name, meal_foods_attributes: {food_id, amount}}}
    const configObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    }; 
    fetch(`http://127.0.0.1:3000/meals/${id}`, configObject)
    .then(resp => resp.json())
    .then( meal_food => {
      setMealFoods([...mealFoods, meal_food])
    })
    .catch( error => console.log(error))
  }
  
  return(
    <>
      <th className={name}>
        {name}
      </th>
      {renderMealFoods(mealFoods)}
      {foodForm 
      ? <NewFoodForm foods={foods} createMealFood={createMealFood} setFoodForm={setFoodForm} /> 
      : <AddButton mealName={name} setFoodForm={setFoodForm} />
      }
    </>
  )
}
// add helper functions to container components
// such as the instance and static methods that you have
// in the VanJs version