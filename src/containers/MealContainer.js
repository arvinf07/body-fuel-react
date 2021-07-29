import AddButton from '../components/AddButton'
import NewFoodForm from '../components/NewFoodForm'
import FoodRow from '../components/FoodRow'



export default function MealContainer({meal, foods, foodForm, setFoodForm}){
  console.log(meal)
  const {name, mealFoods} = meal

  const renderMealFoods = ( (mealFoods = []) => {
    return mealFoods.map( (mealFood) => <FoodRow foodData={mealFood}/> )
  })

  const createMealFood = () => {
    const body = {meal: {name, meal_foods_attributes: {food_id: foodId, amount: foodAmount}}}
    const configObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    }; 
    fetch(`http://127.0.0.1:3000/meals/${meal.id}`, configObject)
    .then(resp => resp.json())
    .then( meal_food => {
      // add new mealfood to row
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
      ? <NewFoodForm foods={foods} setFoodForm={setFoodForm} /> 
      : <AddButton mealName={name} setFoodForm={setFoodForm} />
      }
    </>
  )
}
// add helper functions to container components
// such as the instance and static methods that you have
// in the VanJs version