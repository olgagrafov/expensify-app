import expensesRedicers from '../../reducers/expenses';
import expenses from '../fixture/expenses';


test('should create default array', () => {
    const state = expensesRedicers(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove existing expense by ID', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesRedicers(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);

});

test('should not remove dosnt existing expense ', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id: '1'
    }
    const state = expensesRedicers(expenses, action);
    expect(state).toEqual(expenses);

});

test('should add an expense', () => {
    const expense = {
      id: '109',
      description: 'Laptop',
      note: '',
      createdAt: 20000,
      amount: 29500
    };
    const action = {
      type: 'ADD_EXPENSE',
      expense
    };
    const state = expensesRedicers(expenses, action);
    expect(state).toEqual([...expenses, expense]);
  });
  
  test('should edit an expense', () => {
    const amount = 122000;
    const action = {
      type: 'EDIT_EXPENSE',
      id: expenses[1].id,
      updates: {
        amount
      }
    };
    const state = expensesRedicers(expenses, action);
    expect(state[1].amount).toBe(amount);
  });
  
  test('should not edit an expense if id not found', () => {
    const amount = 122000;
    const action = {
      type: 'EDIT_EXPENSE',
      id: '-1',
      updates: {
        amount
      }
    };
    const state = expensesRedicers(expenses, action);
    expect(state).toEqual(expenses);
});