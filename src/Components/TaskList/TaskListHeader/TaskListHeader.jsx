import { NavLink } from 'react-router-dom'
import s from './TaskListHeader.module.css'

const TaskListHeader = ({ time, date }) => {
    return (
        <header className={s.header}>
            <NavLink className={s.toCalendar} to='/'></NavLink>
            <div className={s.date}>{`${date} | ${time}`}</div>
        </header>
    )
}

export default TaskListHeader