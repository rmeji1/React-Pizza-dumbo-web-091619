import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    nameValue: '',
    selectValue: 'Small',
    isVegetarian: true,
    pizzas: [],
    id: null
  }

  changeIsVegetarian = () => this.setState({isVegetarian: !this.state.isVegetarian})
  updateSelectValue = selectValue => this.setState({selectValue})
  updateNameValue = nameValue => this.setState({nameValue})
  submitNewPizza = (event) => {
    event.preventDefault()
    const { pizzas } = this.state
    if (this.state.id === null){
      this.addPizza()
        .then(pizza => {
          this.setState({ 
            nameValue: '',
            selectValue: 'Small',
            isVegetarian: true,
            pizzas: [...pizzas, pizza],
            id: null
          })
        })
    }else {
      this.updatePizza()
        .then(updatedPizza => {
          this.setState({ 
            nameValue: '',
            selectValue: 'Small',
            isVegetarian: true,
            pizzas: pizzas.map(pizza => pizza.id === updatedPizza.id ? updatedPizza : pizza),
            id: null
          })
        })
    }
  }

  addPizza = () => {
    const {nameValue, selectValue, isVegetarian} = this.state
    return fetch('http://localhost:3000/pizzas', { //eslint-disable-line 
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        topping: nameValue,
        size: selectValue,
        vegetarian: isVegetarian
      })
    })
      .then(response => response.json())
  }

  updatePizza = () => {
    const {nameValue, selectValue, isVegetarian, id} = this.state
    return fetch(`http://localhost:3000/pizzas/${id}`, { //eslint-disable-line 
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        topping: nameValue,
        size: selectValue,
        vegetarian: isVegetarian
      })
    })
      .then(response => response.json())
  }

  editPizzaWith = (id) => {
    const pizza = this.state.pizzas.find(pizza => pizza.id === id)
    const { topping, size, vegetarian } = pizza
    this.setState({ 
      nameValue: topping,
      selectValue: size,
      isVegetarian: vegetarian,
      id: id
    })
  }

  componentDidMount () {
    fetch('http://localhost:3000/pizzas') //eslint-disable-line
      .then(response => response.json())
      .then(pizzas => this.setState({ pizzas }))
  }
  render () {
    const {nameValue, selectValue, isVegetarian, pizzas} = this.state
    return (
      <Fragment>
        <Header />
        <PizzaForm 
          nameValue={nameValue}
          selectValue={selectValue}
          isVegetarian={isVegetarian}
          changeIsVegetarian={this.changeIsVegetarian}
          updateSelectValue={this.updateSelectValue}
          updateNameValue={this.updateNameValue}
          submitNewPizza={this.submitNewPizza}
        />
        <PizzaList pizzas={pizzas} editPizzaWith={this.editPizzaWith} />
      </Fragment>
    )
  }
}

export default App
