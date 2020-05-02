import React from 'react';
import moment from 'moment';
import Translate from 'react-translate-component';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: '', 
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'ERROR' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (    
        <form onSubmit={this.onSubmit} className="form">
           {this.state.error && <Translate content="errorMsg" component="p" className="form__error" />}          
           <Translate component="input" 
             type="text" className="text-input" autoFocus
             attributes={{placeholder: 'description'}} 
             value={this.state.description} 
             onChange={this.onDescriptionChange} />    
          <Translate component="input" 
             type="text" className="text-input" autoFocus
             attributes={{placeholder: 'amount'}} 
             value={this.state.amount} 
             onChange={this.onAmountChange} /> 
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          /> 
           <Translate component="textarea" 
             className="text-area" autoFocus
             attributes={{placeholder: 'add_note'}} 
             value={this.state.note}
             onChange={this.onNoteChange} /> 
          <div>     
            <button className="button">
            <Translate content="save_expense" />            
            </button>
          </div>  
        </form>     
    )
  }
}
