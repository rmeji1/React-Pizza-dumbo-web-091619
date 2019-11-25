import React from "react"

const Pizza = (props) => {
  const { topping, size, vegetarian, id } = props.pizza
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => props.editPizzaWith(id)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
