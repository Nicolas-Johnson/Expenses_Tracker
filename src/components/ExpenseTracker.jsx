import React from "react";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import History from "./History";

class ExpenseTracker extends React.Component{
  render() {
    return(
      <div>
        <h1>Expense Tracker</h1>
        <Balance />
        <History />
        <AddTransaction />
      </div>
    );
  }
}

export default ExpenseTracker;