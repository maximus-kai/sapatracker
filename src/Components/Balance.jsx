import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const Amount = transactions.map((eachTransaction)=> eachTransaction.something);
  const Total = Amount.reduce((acc,item)=>(acc += item),0).toFixed(2)


  return (
    <div className='mx-60'>

    <div className='flex justify-left'>
            <h4 className="text-4xl ml-50 mt-20 font-bold ">
            Your Balance:
           </h4> 
           <h4 className="text-4xl ml-80 mt-20 font-bold ">
           ₦{Total}
           </h4> 
    </div>
    
  </div>
  )
}

export default Balance