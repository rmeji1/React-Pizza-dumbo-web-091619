import React from 'react'

const PizzaForm = ({ nameValue, selectValue, isVegetarian, changeIsVegetarian, updateSelectValue, updateNameValue, submitNewPizza }) => {
  return (
    <div className='form-row'>
      <div className='col-5'>
        <input onChange={event => updateNameValue(event.target.value)} type='text' className='form-control' placeholder='Pizza Topping' value={nameValue} />
      </div>
      <div className='col'>
        <select value={selectValue} className='form-control' onChange={(event) => updateSelectValue(event.target.value)}>
          <option value='Small'>Small</option>
          <option value='Medium'>Medium</option>
          <option value='Large'>Large</option>
        </select>
      </div>
      <div className='col'>
        <div className='form-check'>
          <input className='form-check-input' type='radio' value='Vegetarian' checked={isVegetarian} onChange={() => changeIsVegetarian()} />
          <label className='form-check-label'>
            Vegetarian
          </label>
        </div>
        <div className='form-check'>
          <input className='form-check-input' type='radio' value='Not Vegetarian' checked={!isVegetarian} onChange={() => changeIsVegetarian()} />
          <label className='form-check-label'>
            Not Vegetarian
          </label>
        </div>
      </div>
      <div className='col'>
        <button type='submit' className='btn btn-success' onClick={submitNewPizza}>Submit</button>
      </div>
    </div>

  )
}

export default PizzaForm
