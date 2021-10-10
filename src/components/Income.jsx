import React from "react";

class Income extends React.Component{
  render() {
    const { income } = this.props;
    return(
      <div>
        <h3>Income</h3>
        <p>R${ income }</p>
      </div>
    );
  }
}

export default Income;