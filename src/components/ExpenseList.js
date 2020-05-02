import React from 'react';
import { connect } from 'react-redux';
import Translate from 'react-translate-component';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile"><Translate content="title_expenses" /></div>
      <div className="show-for-desktop"><Translate content="title_expense" /></div>
      <div className="show-for-desktop"><Translate content="amount" /></div>  
    </div>
    <div className="list-body">  
    {
      props.expenses.length === 0 ? (        
        <div className="list-item list-item__message">
           <Translate content="no_expenses" />          
        </div>
      ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
    }   
    </div> 
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
