

export default function NewFoodForm({setFoodForm, foods = []}){

  const createOptions = () => {
    return foods.map( ({name, id}) => <option value={id}>{name}</option>)
  }

  return(
    <tr className='new-food-form'>
      <select name="food_name" id="food">
        {createOptions()}
      </select>
      Quantity(in grams)
      <input type='number' min='1' required='true' />
      <input class='btn btn-primary btn-sm' type="submit" value="Log Food" />
      <button onClick={() => setFoodForm(null)} className="remove-btn btn btn-danger btn-sm cancel-btn">Cancel</button>
    </tr>
  )
}