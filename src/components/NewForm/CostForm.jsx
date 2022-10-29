import React, { useState } from 'react'
import './costForm.css' 

const CostForm = ({createObject, handlerStateForm}) => {

   const [inputName, setInputName] = useState('')
   const [inputAmount, setInputAmount] = useState('')
   const [inputDate, setInputDate] = useState('')

   const nameHandlerChange = (event) => {
      setInputName(event.target.value)
   }

   const amountHandlerChange = (event) => {
      setInputAmount(event.target.value)
   }

   const dateHandlerChange = (event) => {
      setInputDate(event.target.value)
   }


   const submitHandler = (event) => {
      event.preventDefault();

      const costData = {
         date: new Date(inputDate),
         description: inputName,
         amount: inputAmount,
         
      }
      setInputAmount('')
      setInputName('')
      setInputDate('')
      createObject(costData)
   }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
         <div className="new-cost__control" >
            <label>Название</label>
            <input type="text"
            value={inputName}
            onChange={nameHandlerChange} />
         </div>
         
         <div className="new-cost__control">
            <label>Сумма</label>
            <input type="number" min='0.01' step='0.01' 
            value={inputAmount}
            onChange={amountHandlerChange}/>
         </div>

         <div className="new-cost__control">
            <label>Дата</label>
            <input type="date" min='2019-01-01' max='2022-12-31' 
            value={inputDate}
            onChange={dateHandlerChange}/>
         </div>

         <div className="new-cost__actions">
            <button type='submit'>Добавить расход</button>
            <button onClick={handlerStateForm}>Отмена</button>
         </div>
      </div>
    </form>
  )
}

export default CostForm 