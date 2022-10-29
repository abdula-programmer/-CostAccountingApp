import React, { useState } from 'react' 
import Costs from './components/Costs/Costs';
import NewCost from './components/NewForm';


const App = () => {
  const [dataList, setDataList] = useState([])
  const [id, setId] = useState(100);

  const createObject = ({date, description, amount}) => {
   
    const newObj = {
      date,
      description, 
      amount,
      id
    }
    setId(prevId => prevId += 1)
    
   
    setDataList(prevState => {
      return [
        ...prevState,
        newObj
      ]
    })
  }


  return(
    <div>
      <NewCost createObject={createObject}/>
      <Costs dataList={dataList} />
    </div>
  )
}


export default App;