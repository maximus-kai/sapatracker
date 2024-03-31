import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const Amount = transactions.map((eachTransaction)=> eachTransaction.something);
  const Total = Amount.reduce((acc,item)=>(acc += item),0).toFixed(2)


  return (
    <div >

    <div
    sx={{ pt: 4 }}
    direction="row"
    spacing={2}>
            <h4 className="text-3xl font-bold underline">
            Your Balance:
           </h4> 
           <h4 className="text-3xl font-bold underline">
           ₦{Total}
           </h4> 
    </div>
  </div>
  )
}

export default Balance