import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import s from './TaskListHeader.module.css'

type TaskListHeaderPropsType = {
    time: string
    date: string
}

const TaskListHeader: FC<TaskListHeaderPropsType> = ({ time, date }) => {
    return (
        <header className={s.header}>
            <NavLink className={s.toCalendar} to='/'></NavLink>
            <div className={s.date}>{`${date} | ${time}`}</div>
        </header>
    )
}

export default TaskListHeader