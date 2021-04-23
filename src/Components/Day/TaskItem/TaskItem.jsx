import s from './TaskItem.module.css'

const TaskItem = ({ task, changeCompletedStatusOfRecord, deleteRecord, getToast }) => {
    const checkboxHandler = () => {
        changeCompletedStatusOfRecord(task.id, !task.completed)
    }
    const deleteItem = () => {
        deleteRecord(task.id)
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