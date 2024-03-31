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
  <div>
            
            <button 
        variant="contained" 
        onClick={()=>deleteTransaction(Transaction.id)}
        >X
              </button>
        <div>
        <h5 className="text-3xl font-bold underline">
        {Transaction.description}
          </h5>
          <h6 className="text-3xl font-bold underline" color = {TheColor} >
          {sign}₦{Math.abs(Transaction.something)}
          </h6>  
          </div>
  </div>
          </>
  )
}

export default History;