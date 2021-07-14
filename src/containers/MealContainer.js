import AddButton from '../components/AddButton'
import FoodRow from '../components/FoodRow'



export default function MealContainer({meal}){
  const {name, mealFoods} = meal


  const renderMealFoods = ( (mealFoods = ["chicken", 'a']) => {
    return mealFoods.map( (mealFood) => <FoodRow foodData={mealFood}/> )
  })
  
  return(
    <>
      <th className={name}>
        {name}
      </th>
      {renderMealFoods(mealFoods)}
      <AddButton mealName={name} />
    </>
  )
}



// add helper functions to container components
// such as the instance and static methods that you have
// in the VanJs version