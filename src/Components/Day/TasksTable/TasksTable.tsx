import { FC, ReactNode } from 'react'
import s from './TasksTable.module.css'

type TasksTablePropsType = {
    tasks: ReactNode
}

const TasksTable: FC<TasksTablePropsType> = ({tasks}) => {
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