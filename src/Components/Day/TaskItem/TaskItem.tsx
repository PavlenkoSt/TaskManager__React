import { FC } from 'react'
import s from './TaskItem.module.css'
import { changeCompletedStatusOfRecord, deleteRecord , RecordType } from '../../../Redux/calendarReducer'
import { useDispatch } from 'react-redux'

type TaskItemPropsType = {
    task: RecordType
    getToast: (text: string, success: boolean) => void
}

const TaskItem: FC<TaskItemPropsType> = ({ task, getToast }) => {
    const dispatch = useDispatch()

    const checkboxHandler = () => {
        dispatch(changeCompletedStatusOfRecord(task.id, !task.completed))
    }

    const deleteItem = () => {
        dispatch(deleteRecord(task.id))
        getToast('Запись успешно удалена!', true)
    }

    return (
        <tr className={task.completed ? s.completed : s.notCompleted}>
            <td>
                <input className='form-check-input' onChange={checkboxHandler} checked={task.completed} type='checkbox'/>
            </td>
            <td>
                {task.text}
            </td>
            <td>
                {task.time}
            </td>
            <td>
                <button onClick={deleteItem} className={s.remove}></button>
            </td>
        </tr>
    )
}

export default TaskItem