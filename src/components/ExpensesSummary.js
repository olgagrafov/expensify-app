import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Translate from 'react-translate-component';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = ({ expenseCount, expensesTotal, props }) => { 
  const expenseWord = expenseCount === 1 ? <Translate content="expense_word"/> : <Translate content="expenses_word"/> ;
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">          
        { !expenseCount &&  <Translate content="no_expenses"/> ||
         <div>
            <Translate content="viewing" />
            <span className="span-header"> {expenseCount} </span>        
            <span>{expenseWord} </span> 
            <Translate content="totalling"/> 
            <span className="span-header"> {formattedExpensesTotal} </span>
          </div>
        }        
        </h1>
        <div className="page-header__actions">
          <Link to="/create" className="button">
            <Translate content="addExpense" />
          </Link>
        </div>
      </div>
    </div>
  );      
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
