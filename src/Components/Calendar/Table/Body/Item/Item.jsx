import { NavLink } from 'react-router-dom'
import s from './Item.module.css'

const Item = ({ day, activeDate, tasks, currentDayClass, deadlineClass}) => {
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