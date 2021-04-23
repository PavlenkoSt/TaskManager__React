import s from './TasksTable.module.css'

const TasksTable = ({tasks}) => {
    return (
        <>  
            <table className={s.table}>
                <thead>
                    <tr>
                        <td className={s.status}>Статус</td>
                        <td>Задача</td>
                        <td>Время</td>
                        <td>Удалить</td>
                    </tr>
                </thead>
                {tasks}
            </table>
        </>
    )
}

export default TasksTable