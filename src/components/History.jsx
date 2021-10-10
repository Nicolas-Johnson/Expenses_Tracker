import React from "react";

class History extends React.Component{
  constructor() {
    super();
    this.state = {
      History: [{
        title: 'salary',
        infos: {
          amount: 2000,
          entry: 'income',
        }},{
        title: 'Books',
        infos: {
          amount: 200,
          entry: 'expense',
        }},{
        title: 'Camera',
        infos: {
          amount: 300,
          entry: 'expense',
        }},
      ]
    }
  }
  render() {
    const { History } = this.state;
    return(
      <div>
        <h2>History</h2>
        <div>
          {History.map((entry) =>  entry.infos.entry === 'income' ? <div>{ entry.title } income: {entry.infos.amount}</div> : <div>{ entry.title } expense: {entry.infos.amount}</div>,)}
        </div>
      </div>
    );
  }
}

export default History;
