import React, {useContext}from 'react';
import { GlobalContext } from '../context/GlobalState';
import History from './History';

export default function HistoryList() {
  const {transactions} = useContext(GlobalContext);
    return (
        <>
        <br/>
        <h4 className="text-3xl
          bg-gray-700
            mx-60
          text-gray-700
            font-body
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
           <h6 className="text-xl text-gray-700 font-bold mt-5 ">
           Cassava, Garri, Ewa...uhhunn...
          </h6>
        </div>
      </>
    );
  }