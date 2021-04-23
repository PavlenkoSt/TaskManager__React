import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router';
import { TransitionGroup } from 'react-transition-group';
import { compose } from 'redux';
import './App.css';
import Calendar from './Components/Calendar/Calendar';
import DayContainer from './Components/Day/DayContainer';
import TaskListContainer from './Components/TaskList/TaskListContainer';
import withTransition from './HOC/withTransition';
import { getFromLocalStore } from './localStore/localStore';
import { synchronizeRecordListFromLocalStorage } from './Redux/calendarReducer';

const App = ({ synchronizeRecordListFromLocalStorage }) => {

  useEffect(() => {
    synchronizeRecordListFromLocalStorage(getFromLocalStore('records'))
  }, [])

  return (
    <div id='app'>
      <Route path='/' exact>{withTransition(Calendar)}</Route>
      <Route path='/day' component={DayContainer} />
      <Route path='/taskList'>{withTransition(TaskListContainer)}</Route>
    </div>
  );
}

export default compose(
  connect(null, { synchronizeRecordListFromLocalStorage }),
  withRouter
)(App);