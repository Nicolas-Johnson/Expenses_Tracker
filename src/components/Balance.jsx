import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Expenses from "./Expenses";
import Income from "./Income";

export default function Balance() {
  const [balance, setBalance] = useState([]);
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  const expenses = useSelector(state => state.ADD_TRANSACTION.EXPENSES);
  const incomes = useSelector(state => state.ADD_TRANSACTION.INCOMES);

  function reduceTransactions(transaction) {
    return transaction.reduce((acc, curr) => acc + curr.amount, 0);
  };

  useEffect(() => {
    const expense = reduceTransactions(expenses);
    const incame = reduceTransactions(incomes);
    const balance = incame - expense;
    //console.log(blc);
    setBalance([balance]);
    setIncome([incame]);
    setExpense([expense]);
  }, [expenses, incomes])

  return(
    <div>
      <h2>Your Balance</h2>
      <h3>R$
        <span> { balance }</span>
      </h3>
      <div>
          <Income income={ income } />
          <Expenses expense={ expense } />
      </div>
    </div>
  );
}
