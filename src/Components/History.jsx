import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


const History = ({Transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext);
  let sign; 
  let TheColor; 
  if (Transaction.something <0){
     sign = "-";
     TheColor = "#FF0000";
  }
    else{
     sign = "+";
     TheColor = "#00ff00";
  }
  return (<>
  <div className='flex justify-evenly py-2 border-gray-500 border-t border-b'>
            
            <button className= ' text-2xl text-gray-700 border-gray-200'
        onClick={()=>deleteTransaction(Transaction.id)}
        >X
              </button>
        
        <h5 className="text-gray-700 text-2xl font-bold ">
          {Transaction.description}
          </h5>
          <h6 className="text-2xl text-gray-700 font-bold " color = {TheColor} >
          {sign}₦{Math.abs(Transaction.something)}
          </h6>  
          
  </div>
          </>
  )
}

export default History;