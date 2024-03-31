import * as React from 'react';
import { useState,useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function AddTransaction() {
    const {addTransaction} = useContext(GlobalContext);
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const Submit =(e)=>{
      e.preventDefault();
      const transactionParce = {
        id: Math.floor(Math.random()*10000000) ,
        description: text,
        something: +amount
      }
      addTransaction(transactionParce)
    }

  return (
   
      <div>
        <br/>
        <h5 className="text-3xl font-bold underline">
        Add New Transaction
           </h5> 

      <input
          id="outlined-helperText"
          label="Description"
          value = {text}
          onChange={(e)=> {setText(e.target.value)}}
        />
        <br/>
        <div >
          <h5 className="text-3xl font-bold underline">
        Amount
           </h5> 
          <input
            value = {amount}
            onChange={(e)=> {setAmount(e.target.value) }}
          />
        <br/>
        <button 
        onClick={Submit}
        >Add Transaction
              </button>
        </div>
              
      </div>
    
  );
}


