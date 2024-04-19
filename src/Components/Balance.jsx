import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const Amount = transactions.map((eachTransaction)=> eachTransaction.something);
  const Total = Amount.reduce((acc,item)=>(acc += item),0).toFixed(2)


  return (
    <div className=' text-gray-700'>

    <div className='flex justify-left'>
            <h4 className="text-4xl mt-20 font-bold ">
            Your Balance:
           </h4> 
           <h4 className="text-4xl mt-20 font-bold ">
           ₦{Total}
           </h4> 
    </div>
    
  </div>
  )
}

export default Balance