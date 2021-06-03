import TaskListHeader from "./TaskListHeader/TaskListHeader"
import TaskListTable from "./TaskListTable/TaskListTable"
import s from './TaskList.module.scss'
import TaskListForm from "./TaskListForm/TaskListForm"
import TaskListSetting from "./TaskListSetting/TaskListSetting"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import './TaskListAnim.scss'
import Pagination from "../common/Pagination/Pagination"
import { FC } from "react"

type TaskListPropsType = {
    date: string
    time: string
    tasks: Array<JSX.Element>
    onSubmitSetting: (formData: any) => void
    onSubmit: (formData: any) => void
}

const TaskList: FC<TaskListPropsType> = ({ date, time, onSubmitSetting, tasks, onSubmit }) => {

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