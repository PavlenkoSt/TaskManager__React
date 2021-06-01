import { FC, ReactNode } from 'react'
import s from './TaskListTable.module.css'

type TaskListTablePropsType = {
    tasks: ReactNode
}

const TaskListTable: FC<TaskListTablePropsType> = ({ tasks }) => {
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
            {tasks}
        </table>
    )
}

export default TaskListTable