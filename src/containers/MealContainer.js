import { useState } from 'react'
import AddButton from '../components/AddButton'
import NewFoodForm from '../components/NewFoodForm'
import FoodRow from '../components/FoodRow'



export default function MealContainer({meal, foods, foodForm, setFoodForm}){
  const {name, mealFoods} = meal

  console.log(foodForm)

  const renderMealFoods = ( (mealFoods = []) => {
    return mealFoods.map( (mealFood) => <FoodRow foodData={mealFood}/> )
  })
  
  return(
    <>
      <th className={name}>
        {name}
      </th>
      {renderMealFoods(mealFoods)}
      {foodForm 
      ? <NewFoodForm foods={foods} setFoodForm={setFoodForm} /> 
      : <AddButton mealName={name} setFoodForm={setFoodForm} />
      }
    </>
  )
}



// add helper functions to container components
// such as the instance and static methods that you have
// in the VanJs version