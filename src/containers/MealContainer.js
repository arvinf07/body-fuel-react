import AddButton from '../components/AddButton'
import FoodRow from '../components/FoodRow'

const renderMealFoods = ( (mealFoods) => {
  return mealFoods.map( (mealFood) => <FoodRow foodData={mealFood}/> )
})


export default function MealContainer({name, mealFoods}){
  return(
    <tr className={name}>
      {renderMealFoods(mealFoods)}
      <AddButton mealName={name} />
    </tr>
  )
}



// add helper functions to container components
// such as the instance and static methods that you have
// in the VanJs version