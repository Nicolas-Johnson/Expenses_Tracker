import React from "react";
import PropType from 'prop-types';
import { connect } from 'react-redux';
import * as allActions from '../Redux/Actions/index';

class AddTransaction extends React.Component{
  constructor() {
    super();
    this.state = {
      title: '',
      amount: '',
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

  handleAddTransaction = () => {
    const { title, amount, entry } = this.state;
    const { addHystory, addIncome, addExpense } = this.props;
    const transaction = {
      title, amount,
    }    
    const history = {
      title: title,
      infos: {
        amount,
        entry,
      }
    }
    if(entry === 'income') {
      this.setState({title: '', amount: '', entry: ''})
      addHystory(history);
      addIncome(transaction);
    } else {
      this.setState({title: '', amount: '', entry: ''})
      addHystory(history);
      addExpense(transaction);
    }
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
        <button type="button" onClick={ this.handleAddTransaction }>Add Transaction</button>
        </div>
      </div>
    );
  }
}

AddTransaction.propType = {
  addHystory: PropType.func.isRequired,
  addIncome: PropType.func.isRequired,
  addExpense: PropType.func.isRequired,
}

const mapDispathToProps = (dispatch) => ({
  addHystory: (payload) => dispatch(allActions.addHistory(payload)),
  addIncome: (payload) => dispatch(allActions.addIncome(payload)),
  addExpense: (payload) => dispatch(allActions.addExpense(payload)),
})

export default connect(null, mapDispathToProps)(AddTransaction);
