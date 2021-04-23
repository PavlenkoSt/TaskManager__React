import TaskListHeader from "./TaskListHeader/TaskListHeader"
import TaskListTable from "./TaskListTable/TaskListTable"
import s from './TaskList.module.css'
import TaskListForm from "./TaskListForm/TaskListForm"
import TaskListSetting from "./TaskListSetting/TaskListSetting"
import PaginationContainer from "../common/Pagination/PaginationContainer"

const TaskList = ({ totalCount, currentPage, portionsSize, countOnPage, setCurrentPage, date, time, onSubmitSetting, tasks, onSubmit }) => {
    return (
        <div id='wrapper'>
            <TaskListHeader time={time} date={date} />
            <TaskListSetting onSubmit={onSubmitSetting} tasks={tasks}/>
            <PaginationContainer
                totalCount={totalCount} 
                countOnPage={countOnPage} 
                currentPage={currentPage} 
                portionsSize={portionsSize}
                setCurrentPage={setCurrentPage}
            />
            {tasks.length ? <TaskListTable tasks={tasks} /> : <div className={s.noRecords}> Задач пока нет. Добавьте первую. </div>}
            <TaskListForm onSubmit={onSubmit} />
        </div>
    )
}

export default TaskList