import Card from '../card';
import CostDate from './CostDate';
import './CostItem.css'

const CostItem = ({data:{date, description, amount}}) => {
  
   return(
      <Card className='cost-item'>
         <div>
            <CostDate date={date}/>
         </div>
         <div className='cost-item__description'>
            <h2>{description}</h2>
            <div className='cost-item__price'>${amount}</div>
         </div>
      </Card>
   )
}

export default CostItem;