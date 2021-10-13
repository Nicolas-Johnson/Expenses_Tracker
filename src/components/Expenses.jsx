import React from "react";

class Expenses extends React.Component{
  render() {
    const { expense } = this.props;
    return(
      <div>
        <h3>Expense</h3>
        <p>R${ expense }</p>
      </div>
    );
  }
}

export default Expenses;
