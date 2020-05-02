import React from 'react';
import { connect } from 'react-redux';
import Translate from 'react-translate-component';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';



export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">   
          <Translate content="addExpense" component="h1" className="page-header__title"/>   
          </div>
        </div> 
        <div className="content-container">
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
