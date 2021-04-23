import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router';
import { compose } from 'redux';
import './App.css';
import Calendar from './Components/Calendar/Calendar';
import DayContainer from './Components/Day/DayContainer';
import TaskListContainer from './Components/TaskList/TaskListContainer';
import { getFromLocalStore } from './localStore/localStore';
import { synchronizeRecordListFromLocalStorage } from './Redux/calendarReducer';

const App = ({ synchronizeRecordListFromLocalStorage }) => {

  useEffect(() => {
    synchronizeRecordListFromLocalStorage(getFromLocalStore('records'))
  }, [])

  return (
    <div id='app'>
      <Route path='/' exact component={Calendar}/>
      <Route path='/day' component={DayContainer}/>
      <Route path='/taskList' component={TaskListContainer}/>
    </div>
  );
}

export default compose(
  connect(null, { synchronizeRecordListFromLocalStorage }),
  withRouter
)(App);