import TasksTable from "./TasksTable/TasksTable"
import DatePanel from "./DatePanel/DatePanel"
import TaskForm from "./TaskForm/TaskForm"
import s from './Day.module.css'
import './DayAnim.css'
import { CSSTransition, TransitionGroup } from "react-transition-group"

const Day = ({ dateNamesList, onSubmit, tasks, correctDate }) => {

    const tasksWithAnimation = <TransitionGroup component='tbody'>
        {tasks.map(task => <CSSTransition classNames='item' timeout={300} >{task}</CSSTransition>)}
    </TransitionGroup>

    return (
        <div id='wrapper'>
            <DatePanel date={correctDate} monthNames={dateNamesList.monthsForDay} />
            {
                tasks.length 
                    ? <TasksTable tasks={tasksWithAnimation}/>
                    : <p className={s.noTasks}>Задач на этот день пока нет. Добавьте первую.</p>
            }
            <TaskForm onSubmit={onSubmit} />
        </div>
    )
}

export default Day