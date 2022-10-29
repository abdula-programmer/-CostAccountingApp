import React from 'react'
import CostItem from '../CostItem';
import './CostList.css';


const CostList = ({costs}) => {
  

   const arrDataList = costs
      .map((item) => <CostItem key={item.id} data={item}/>)

   
  
   
   let costContent = <h2 className='cost-list__fallback'>В этом году покупок нет!!!</h2>;

   if(costs.length > 0) costContent = arrDataList

   
   return (
      <ul className='cost-list'>
         {costContent}
      </ul>
      
      
  )
}

export default CostList;