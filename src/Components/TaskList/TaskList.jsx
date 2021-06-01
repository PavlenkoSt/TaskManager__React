import TaskListHeader from "./TaskListHeader/TaskListHeader"
import TaskListTable from "./TaskListTable/TaskListTable"
import s from './TaskList.module.css'
import TaskListForm from "./TaskListForm/TaskListForm"
import TaskListSetting from "./TaskListSetting/TaskListSetting"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import './TaskListAnim.css'
import Pagination from "../common/Pagination/Pagination"

const TaskList = ({ totalCount, currentPage, portionsSize, countOnPage, setCurrentPage, date, time, onSubmitSetting, tasks, onSubmit }) => {

    const tasksWithAnimation = <TransitionGroup component='tbody'>
        {tasks.map(task => <CSSTransition classNames='item' timeout={300} >{task}</CSSTransition>)}
    </TransitionGroup>

    return (
        <div id='wrapper'>
            <TaskListHeader time={time} date={date} />
            <TaskListSetting onSubmit={onSubmitSetting}/>
            <Pagination />
            {tasks.length ? <TaskListTable tasks={tasksWithAnimation} /> : <div className={s.noRecords}> Задач пока нет. Добавьте первую. </div>}
            <TaskListForm onSubmit={onSubmit} />
        </div>
    )
}

export default TaskList