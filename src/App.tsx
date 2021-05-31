import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, withRouter } from 'react-router'
import './App.css'
import Calendar from './Components/Calendar/Calendar'
import DayContainer from './Components/Day/DayContainer'
import TaskListContainer from './Components/TaskList/TaskListContainer'
import withTransition from './HOC/withTransition'
import { getFromLocalStore } from './localStore/localStore'
import { synchronizeRecordListFromLocalStorage } from './Redux/calendarReducer'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(synchronizeRecordListFromLocalStorage(getFromLocalStore('records')))
    }, [])

    return (
        <div id='app'>
        <Route path='/' exact>{withTransition(Calendar)}</Route>
        <Route path='/day' component={DayContainer} />
        <Route path='/taskList'>{withTransition(TaskListContainer)}</Route>
        </div>
    )
}

export default withRouter(App)