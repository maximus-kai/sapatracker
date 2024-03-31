import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';



const Summary = () => {

  const {transactions} = useContext(GlobalContext)
  
  const Amount = transactions.map((eachTransaction)=> eachTransaction.something);
  const Income = Amount.filter(eachItem=>eachItem>0).reduce((acc,item)=>(acc += item),0).toFixed(2)
  const Expense = (Amount.filter(eachItem=>eachItem<0).reduce((acc,item)=>(acc += item),0)*1).toFixed(2)
  
  return (
    <div>
        <div>
          <div>
          <h5 className="text-3xl font-bold underline">
          INCOME
          </h5>
          <h5 className="text-3xl font-bold underline">
          +₦{Income}
          </h5>
          </div>
         
          <div>
          <h5 className="text-3xl font-bold underline">
          EXPENSE
          </h5>
          <h5 className="text-3xl font-bold underline">
          -₦{Math.abs(Expense)} 
          </h5>
          </div>
          
        </div>
      </div>
  )
    
}

export default Summary