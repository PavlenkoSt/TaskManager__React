import TasksTable from "./TasksTable/TasksTable"
import DatePanel from "./DatePanel/DatePanel"
import TaskForm from "./TaskForm/TaskForm"
import s from './Day.module.css'


const Day = ({ dateNamesList, onSubmit, tasks, correctDate }) => {
    return (
        <div id='wrapper'>
            <DatePanel date={correctDate} monthNames={dateNamesList.monthsForDay} />
            {
                tasks.length 
                    ? <TasksTable tasks={tasks}/>
                    : <p className={s.noTasks}>Задач на этот день пока нет. Добавьте первую.</p>
            }
            <TaskForm onSubmit={onSubmit} />
        </div>
    )
}

export default Day