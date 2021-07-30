import DeleteButton from './DeleteButton'

export default function FoodRow({name, cal, fat, carb, pro}){
  return(
    <tr>
      <td>
      <DeleteButton />
      </td>
    </tr>
  )
}