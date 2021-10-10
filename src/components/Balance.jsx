import React from "react";
import Expenses from "./Expenses";
import Income from "./Income";

class Balance extends React.Component{
  render() {
    return(
      <div>
        <h2>Your Balance</h2>
        <div>
            <Income income="250" />
            <Expenses expense="200" />
        </div>
      </div>
    );
  }
}

export default Balance;
