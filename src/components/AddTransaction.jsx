import React from "react";

class AddTransaction extends React.Component{
  constructor() {
    super();
    this.state = {
      title: '',
      amount: 0,
      entry: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    if(name === 'amount') {
      const valueToNumber = parseInt(value);
      if(valueToNumber < 0) {
        return this.setState({[name]: Math.abs(valueToNumber), entry: 'expense'});
      }
      return this.setState({[name]: valueToNumber, entry: 'income'});
    }
    return this.setState({[name]: value});
  }
  render() {
    const { title, amount } = this.state;
    return(
      <div>
        <h2>Add New Transaction</h2>
        <div>
          <form>
            <label htmlFor="title">
              Entrada/Saida:
              <input name="title" type="text" defaultValue={ title } onChange={ this.handleChange } />
            </label>
            <label htmlFor="amount">
              Valor R$ (EX: -200 = Expense / 200 = Income):
              <input name="amount" type="number" defaultValue={ amount } onChange={ this.handleChange } />
            </label>
        </form>
        </div>
      </div>
    );
  }
}

export default AddTransaction;
