

export default function AddButton({name}){
  return(
    <tr className={name}>
      <td>
        <button class="btn btn-primary btn-sm" type="button">Add Food ++</button>
      </td>
    </tr>
  )
}