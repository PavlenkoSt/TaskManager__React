import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import addZeroToDate from '../../../helpers/addZeroToDate'
import dateMonthPlusOne from '../../../helpers/dateMonthPlusOne'
import s from '../../Day/TaskItem/TaskItem.module.css'
import '../TaskListAnim.css'

const TaskListItem = ({ id, completed, text, date, time, changeCompletedStatusOfRecord, deleteRecord, getToast }) => {

    const checkboxHandler = () => {
        changeCompletedStatusOfRecord(id, !completed)
    }

    const deleteTask = () => {
        deleteRecord(id)
        getToast('Запись успешно удалена!', true)
    }

    const correctDate = dateMonthPlusOne(date)
    const correctDateToShow = addZeroToDate(correctDate)

    return (
        <tr className={completed ? s.completed : s.notCompleted} >
            <td>
                <input className='form-check-input' onChange={checkboxHandler} checked={completed} type='checkbox'/>
            </td>
            <td>{text}</td>
            <td>
                <NavLink className={s.link} to={`/day/${correctDate}`}>{correctDateToShow}</NavLink>
            </td>
            <td>{time}</td>
            <td>
                <button className={s.remove} onClick={deleteTask} ></button>
            </td>
        </tr>
    )
}

export default TaskListItem