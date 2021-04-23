import { NavLink } from 'react-router-dom'
import s from './Item.module.css'

const Item = ({ day, activeDate, searchTasks, currentDayClass, deadlineClass}) => {
    return (
        <td className={currentDayClass}>
            <NavLink className={s.link} to={`/day/${activeDate.year}.${activeDate.month + 1}.${day}`}></NavLink>
            <span className={s.day}>{day}</span>
            <NavLink to={`/day/${activeDate.year}.${activeDate.month + 1}.${day}`}>
                <span className={` ${s.mobile}`}>{day}</span>
                <div className={`${(searchTasks(day) ? s.tdChild : null)} ${deadlineClass}`}>
                    {searchTasks(day)}
                </div>
            </NavLink>
        </td>
    )
}

export default Item