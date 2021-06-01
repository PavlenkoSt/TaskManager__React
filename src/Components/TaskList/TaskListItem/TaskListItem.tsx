import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import addZeroToDate from '../../../helpers/addZeroToDate'
import dateMonthPlusOne from '../../../helpers/dateMonthPlusOne'
import { changeCompletedStatusOfRecord, deleteRecord } from '../../../Redux/calendarReducer'
import s from '../../Day/TaskItem/TaskItem.module.css'
import '../TaskListAnim.css'

type TaskListItemPropsType = {
    id: number
    completed: boolean
    text: string
    date: string 
    time: string
    getToast: (text: string, success: boolean) => void
}

const TaskListItem: FC<TaskListItemPropsType> = ({ id, completed, text, date, time, getToast }) => {
    const dispatch = useDispatch()

    const checkboxHandler = () => {
        dispatch(changeCompletedStatusOfRecord(id, !completed))
    }

    const deleteTask = () => {
        dispatch(deleteRecord(id))
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