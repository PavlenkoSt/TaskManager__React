import { FC } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { activeDateSelector, currentDateSelector } from '../../../../../Redux/calendarSelectors'
import s from './Item.module.css'

type ItemPropsType = {
    day: number
    searchTasks: (day: string) => JSX.Element | null
}

const Item: FC<ItemPropsType> = ({ day, searchTasks }) => {

    const activeDate = useSelector(activeDateSelector)
    const currentDate = useSelector(currentDateSelector)

    const currentDayClass = (activeDate.year === currentDate.year && activeDate.month === currentDate.month && currentDate.day === day) ? s.current : s.cell

    const realyDate = new Date(currentDate.year, currentDate.month, currentDate.day)
    const dayDate = new Date(activeDate.year, activeDate.month, day)
 
    //@ts-ignore
    const deadlineClass = realyDate - dayDate > 0 ? s.deadline : ''

    const tasks = searchTasks(day.toString())

    return (
        <td className={currentDayClass}>
            <NavLink className={s.link} to={`/day/${activeDate.year}.${activeDate.month + 1}.${day}`}></NavLink>
            <span className={s.day}>{day}</span>
            <NavLink to={`/day/${activeDate.year}.${activeDate.month + 1}.${day}`}>
                <span className={` ${s.mobile}`}>{day}</span>
                <div className={`${(tasks ? s.tdChild : null)} ${deadlineClass}`}>
                    {tasks}
                </div>
            </NavLink>
        </td>
    )
}

export default Item