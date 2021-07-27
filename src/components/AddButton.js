

export default function AddButton({mealName, setFoodForm}){

  return(
    <tr>
      <td>
        <button onClick={() => setFoodForm(mealName)} class="btn btn-primary btn-sm" type="button">Add Food ++</button>
      </td>
    </tr>
  )
}