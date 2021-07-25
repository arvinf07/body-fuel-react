

export default function AddButton({name, toggleFoodForm}){

  return(
    <tr className={name}>
      <td>
        <button onClick={toggleFoodForm} class="btn btn-primary btn-sm" type="button">Add Food ++</button>
      </td>
    </tr>
  )
}