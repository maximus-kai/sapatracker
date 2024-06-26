import React, {useContext}from 'react';
import { GlobalContext } from '../context/GlobalState';
import History from './History';

export default function HistoryList() {
  const {transactions} = useContext(GlobalContext);
    return (
        <>
        <br/>
        <h4 className="text-xl
          bg-gray-700
          text-gray-100
            font-body
            text-center
            font-bold 
            pb-0
            border-b
          border-gray-100 ">
        History
          </h4>
      <div>
          {
            transactions.map((eachTransaction)=>
            (<History key = {eachTransaction.id} Transaction = {eachTransaction} />)
            )
          }
           <h6 className="text-l text-gray-200 text-center font-bold mt-5 ">
           Cassava, Garri, Ewa...uhhunn...
          </h6>
        </div>
      </>
    );
  }