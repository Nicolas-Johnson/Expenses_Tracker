import React from "react";

class Expenses extends React.Component{
  render() {
    const { expense } = this.props;
    return(
      <div>
        <h3>Expenses</h3>
        <p>R${ expense }</p>
      </div>
    );
  }
}

export default Expenses;