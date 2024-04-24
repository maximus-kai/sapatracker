import * as React from "react";
import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const Submit = (e) => {
    e.preventDefault();
    const transactionParce = {
      id: Math.floor(Math.random() * 10000000),
      description: text,
      something: +amount,
    };
    addTransaction(transactionParce);
  };
  return (
    <div className="text-center text-gray-100">
      <br />
      {/* @ "Add new transaction" button */}
      <h5
        className="
        text-xl
        text-center
         font-body
         mt-10 
         font-bold "
      >
        Add New Transaction
      </h5>
      {/* @description input box */}
      <input
        className="
          mt-10 text-center"
        placeholder="Description"
        label="Description"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />
      <div>
        <h5
          className="
          text-xl
          text-gray-200
          font-bold "
        ></h5>
        <input
          className="mt-10 py-5"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <br />
        <button
          className="
        py-5
        mt-10 
        bg-gray-700 
        text-gray-100 
              font-bold 
        font-body 
        text-xl 
        px-10
        rounded
        border-gray-200 
        border"
          // px-60
          //
          onClick={Submit}
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
}
