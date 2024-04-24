import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';



const Summary = () => {

  const {transactions} = useContext(GlobalContext)
  
  const Amount = transactions.map((eachTransaction)=> eachTransaction.something);
  const Income = Amount.filter(eachItem=>eachItem>0).reduce((acc,item)=>(acc += item),0).toFixed(2)
  const Expense = (Amount.filter(eachItem=>eachItem<0).reduce((acc,item)=>(acc += item),0)*1).toFixed(2)
  
  return (
    <div>
        <div className='mt-2 text-gray-200 py-10 border-gray-100'>
        {/* border-t border-b */}
          <div className='flex justify-center'>
          <h5 className="text-xl ml-30 font-bold ">
          INCOME
          </h5>
          <h5 className="text-xl justify-center font-bold ">
          +₦{Income}
          </h5>
          </div>
         
          <div className='flex justify-center'>
          <h5 className="text-xl  font-bold ">
          EXPENSE
          </h5>
          <h5 className="text-xl font-bold ">
          -₦{Math.abs(Expense)} 
          </h5>
          </div>
          
        </div>
      </div>
  )
    
}

export default Summary