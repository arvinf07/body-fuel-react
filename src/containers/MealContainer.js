import AddButton from '../components/AddButton'
import FoodRow from '../components/FoodRow'



export default function MealContainer({meal}){
  const {name, mealFoods} = meal


  const renderMealFoods = ( (mealFoods = []) => {
    return mealFoods.map( (mealFood) => <FoodRow foodData={mealFood}/> )
  })
  
  return(
    <tr className={name}>
      <th>{name}</th>
      {renderMealFoods(mealFoods)}
      <AddButton mealName={name} />
    </tr>
  )
}



// add helper functions to container components
// such as the instance and static methods that you have
// in the VanJs version