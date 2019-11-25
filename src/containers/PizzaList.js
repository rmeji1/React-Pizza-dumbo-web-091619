import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  render () {
    const { pizzas, editPizzaWith } = this.props
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} editPizzaWith={editPizzaWith} />)
          }
        </tbody>
      </table>
    )
  }
}

export default PizzaList
