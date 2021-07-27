import { useState } from "react";

export default function NewFoodForm({setFoodForm, foods = []}){
  const [state, setState] = useState({
    food_id: 0,
    amount: 0
  })

  console.log(state)
  const onChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  const createOptions = () => {
    return foods.map( ({name, id}) => <option value={id}>{name}</option>)
  }

  return(
    <tr className='new-food-form'>
      <select onChange={onChange} name="food_id" id="food">
        {createOptions()}
      </select>
      Quantity(in grams)
      <input onChange={onChange} name='amount' type='number' min='1' required='true' />
      <input class='btn btn-primary btn-sm' type="submit" value="Log Food" />
      <button onClick={() => setFoodForm(null)} className="remove-btn btn btn-danger btn-sm cancel-btn">Cancel</button>
    </tr>
  )
}