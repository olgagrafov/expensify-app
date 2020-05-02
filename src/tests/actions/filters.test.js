import moment from 'moment';
import {
    setStartDate, 
    setEndDate, 
    setTextFilter,
    sortByDate,
    sortByAmount
} from '../../actions/filters';

test('Set start date', () => {
    const actions = setStartDate(moment(0));
    expect(actions).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
 });

 test('Set end date', () => {
    const actions = setEndDate(moment(0));
    expect(actions).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
 });

 test('Set Text Filter', () => {
    const actions = setTextFilter('1');
    expect(actions).toEqual({
        type: 'SET_TEXT_FILTER',
        text: expect.any(String)
    })
 });

 test('Set Empty Text Filter', () => {
    const actions = setTextFilter();
    expect(actions).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
 });

 test('Set sort By Date', () => {   
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'})
 });

 test('Set sort By Amount', () => {   
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'})
 });
