

export default function AddButton({name, setFoodForm}){

  return(
    <tr className={name}>
      <td>
        <button onClick={setFoodForm} class="btn btn-primary btn-sm" type="button">Add Food ++</button>
      </td>
    </tr>
  )
}