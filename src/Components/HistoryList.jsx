import React, {useContext}from 'react';
import { GlobalContext } from '../context/GlobalState';
import History from './History';

export default function HistoryList() {
  const {transactions} = useContext(GlobalContext);
    return (
        <>
        <br/>
        <h4 className="text-3xl font-bold underline">
        History
          </h4>
      <div>
          {
            transactions.map((eachTransaction)=>
            (<History key = {eachTransaction.id} Transaction = {eachTransaction} />)
            )
          }
           <h6 className="text-3xl font-bold underline">
           Cassava, Garri, Ewa...uhhunn...
          </h6>
        </div>
      </>
    );
  }