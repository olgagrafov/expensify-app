import moment from 'moment';
import filterReducers from '../../reducers/filters';

test('should setup default filter', () => {
  const state = filterReducers(undefined, {type: '@@INIT'});
  expect(state).toEqual({
      text:'',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')});
});

test('should setUp sort by to ampunt', () => {
    const state= filterReducers(undefined, {type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should setUp sort by to date', () => {
    const curentState = {
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = {type:'SORT_BY_DATE'};
    const state= filterReducers(curentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => { 
    const text = 'set text filter';
    const action ={
        type: 'SET_TEXT_FILTER',
        text
    } 
    const state = filterReducers(undefined, action);
    expect(state.text).toBe(text);
}); 

test('should set start date', () => { 
    const startDate =  moment();
    const action ={
        type: 'SET_START_DATE',
        startDate
    } 
    const state = filterReducers(undefined, action);
    expect(state.startDate).toEqual(startDate);
}); 

test('should set end date', () => { 
    const endDate =  moment(0).add(5, 'days');
    const action ={
        type: 'SET_END_DATE',
        endDate
    } 
    const state = filterReducers(undefined, action);
    expect(state.endDate).toEqual(endDate);
}); 

