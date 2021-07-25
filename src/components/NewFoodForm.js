

export default function NewFoodForm({toggleFoodForm, foods = []}){

  const createOptions = () => {
    return foods.map( ({name, id}) => <option value={id}>{name}</option>)
  }

  return(
    <form>
      <select name="food_name" id="food">
        {createOptions()}
      </select>
      Quantity(in grams)
      <input type='number' min='1' required='true' />
      <input class='btn btn-primary btn-sm' type="submit" value="Log Food" />
      <button onClick={toggleFoodForm} className="remove-btn btn btn-danger btn-sm cancel-btn">Cancel</button>
    </form>
  )
}