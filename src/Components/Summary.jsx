import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';



const Summary = () => {

  const {transactions} = useContext(GlobalContext)
  
  const Amount = transactions.map((eachTransaction)=> eachTransaction.something);
  const Income = Amount.filter(eachItem=>eachItem>0).reduce((acc,item)=>(acc += item),0).toFixed(2)
  const Expense = (Amount.filter(eachItem=>eachItem<0).reduce((acc,item)=>(acc += item),0)*1).toFixed(2)
  
  return (
    <div>
        <div className='mt-20 mx-60 py-10 border-t border-b  border-gray-100'>
          <div className='flex justify-left'>
          <h5 className="text-3xl ml-30 font-bold ">
          INCOME
          </h5>
          <h5 className="text-3xl  font-bold ">
          +₦{Income}
          </h5>
          </div>
         
          <div className='flex justify-left'>
          <h5 className="text-3xl  font-bold ">
          EXPENSE
          </h5>
          <h5 className="text-3xl font-bold ">
          -₦{Math.abs(Expense)} 
          </h5>
          </div>
          
        </div>
      </div>
  )
    
}

export default Summary