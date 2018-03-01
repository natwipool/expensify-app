import moment from 'moment';
import { 
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate 
} from '../../actions/filters';

test('should genarate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should genarate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

test('should setup text filter action object with provided values', () => {
  const action = setTextFilter('set text filter values');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'set text filter values'
  });
});

test('should setup text filter action object with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should setup sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should setup sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});