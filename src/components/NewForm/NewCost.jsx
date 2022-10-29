import React, { useState } from 'react'
import CostForm from './CostForm';
import './newCost.css'
const NewCost = ({createObject}) => {

  const [stateOpenForm, setStateOpenForm] = useState(false);  


  const handlerStateForm = () => {
    setStateOpenForm(prevState => !prevState)
  }

  const addConsumption = <button onClick={handlerStateForm}>Добавить новый расход</button>

  
  return (
    <div className='new-cost'> 
    {
      stateOpenForm? <CostForm createObject={createObject} handlerStateForm={handlerStateForm}/> : addConsumption
    }
      
    </div>
  )
}

export default NewCost;