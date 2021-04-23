import s from './TaskListTable.module.css'

const TaskListTable = ({ tasks }) => {
    return (
        <table className={s.table}>
            <thead>
                <tr>
                    <td>Статус</td>
                    <td>Задача</td>
                    <td>Дата</td>
                    <td>Время</td>
                    <td>Удалить</td>
                </tr>
            </thead>
            <tbody>
                {tasks}
            </tbody>
        </table>
    )
}

export default TaskListTable