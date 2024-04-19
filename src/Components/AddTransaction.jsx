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
        <h5 className="
        text-3xl
       text-gray-100
         font-body
       bg-gray-700
         mt-10 
         font-bold "
        //  mx-60
         >
        Add New Transaction
           </h5> 

      <input
          className='
          mt-10
          
           py-5
          text-gray-700'
          // px-60
          label="Description"
          value = {text}
          onChange={(e)=> {setText(e.target.value)}}
        />
        <br/>
        <div >
          <h5 className="
          text-3xl
          text-gray-700
          font-bold ">
        Amount
           </h5> 
          <input
          className='
          mt-10
          text-gray-700
          py-5'
          // px-60
            value = {amount}
            onChange={(e)=> {setAmount(e.target.value) }}
          />
        <br/>
        <button className='
        py-5
        mt-10 
        bg-gray-700 
        text-gray-100 
        font-bold 
        font-body 
        text-3xl 
        px-10
        rounded
        border-gray-200 
        border'
        // px-60 
        // 
        onClick={Submit}
        >Add Transaction
              </button>
        </div>
              
      </div>
    
  );
}


