import TasksTable from "./TasksTable/TasksTable"
import DatePanel from "./DatePanel/DatePanel"
import TaskForm from "./TaskForm/TaskForm"
import s from './Day.module.css'
import './DayAnim.css'
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { FC, useEffect } from "react"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from "react-redux"
import { recordsSelector } from "../../Redux/calendarSelectors"
import TaskItem from "./TaskItem/TaskItem"
import { RouteComponentProps, withRouter } from "react-router"
import dateMonthMinusOne from "../../helpers/dateMonthMinusOne"
import { reset } from "redux-form"
import { addNewRecord } from "../../Redux/calendarReducer"

const Day: FC<RouteComponentProps> = ({ location }) => {
    const dispatch = useDispatch()

    const records = useSelector(recordsSelector)

    useEffect(() => {
        toast.configure()
    }, [])

    const getToast = (text: string, success: boolean) => {
        const options = { autoClose: 3000 }
        success ? toast.success(text, options) : toast.error(text, options)
    }

    //@ts-ignore
    const [path, date] = location.pathname.match(/\/day\/(.+)/)
    const correctDate = dateMonthMinusOne(date)

    const tasks = records
        .filter(task => task.date === correctDate)
        .map(task => <TaskItem 
            key={task.id} 
            task={task} 
            getToast={getToast}
        />)

    const onSubmit = (formData: any) => {
        if(formData.task && formData.time){
            dispatch(addNewRecord({
                id: Date.now(),
                text: formData.task,
                time: formData.time,
                completed: false,
                date: correctDate
            }))
            getToast('Запись успешно добавлена!', true)
            dispatch(reset('add-task'))
        }else{
            getToast('Ошибка! Заполните все поля!', false)
        }
    }

    const tasksWithAnimation = <TransitionGroup component='tbody'>
        {tasks.map(task => <CSSTransition classNames='item' timeout={300} >{task}</CSSTransition>)}
    </TransitionGroup>

    return (
        <div id='wrapper'>
            <DatePanel date={correctDate} />
            {
                tasks.length 
                    ? <TasksTable tasks={tasksWithAnimation}/>
                    : <p className={s.noTasks}>Задач на этот день пока нет. Добавьте первую.</p>
            }
            <TaskForm onSubmit={onSubmit} />
        </div>
    )
}

export default withRouter(Day)