import React, { useState } from 'react'
import './Costs.css';
import Card from '../card'
import CostsFilter from '../CostsFilter';
import CostList from '../CostList/CostList';
import CostsDiagram from './CostsDiagram';


const Costs = ({dataList}) => {
  
   const [year, setYear] = useState(2022)

   const arrDataListFilter = dataList.filter(({date}) => date.getFullYear().toString() === year)
   
   const onChangeYear = (newYear) => {
      setYear(newYear);
   }
   
   
   return (
      <div>
         <Card className='costs'>
         
         <CostsFilter onChangeYear={onChangeYear} year={year} />
         <CostsDiagram costs={arrDataListFilter}/>
         <CostList costs={arrDataListFilter} />
         </Card>
      </div>
      
      
  )
}

export default Costs;