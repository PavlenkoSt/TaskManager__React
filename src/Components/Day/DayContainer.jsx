import { connect } from "react-redux"
import dateMonthMinusOne from "../../helpers/dateMonthMinusOne"
import { addNewRecord, changeCompletedStatusOfRecord, deleteRecord } from "../../Redux/calendarReducer"
import TaskItem from "./TaskItem/TaskItem"
import { reset } from 'redux-form'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react"
import Day from "./Day"


const DayContainer = ({ location, records, dateNamesList, changeCompletedStatusOfRecord, deleteRecord, addNewRecord, reset }) => {
    useEffect(() => {
        toast.configure()
    }, [])

    const getToast = (text, success) => {
        const options = { autoClose: 3000 }
        success ? toast.success(text, options) : toast.error(text, options)
    }

    const [path, date] = location.pathname.match(/\/day\/(.+)/)
    const correctDate = dateMonthMinusOne(date)

    const tasks = records
        .filter(task => task.date === correctDate)
        .map(task => <TaskItem 
            key={task.id} 
            task={task} 
            changeCompletedStatusOfRecord={changeCompletedStatusOfRecord} 
            deleteRecord={deleteRecord}
            getToast={getToast}
        />)

    const onSubmit = formData => {
        if(formData.task && formData.time){
            addNewRecord({
                id: Date.now(),
                text: formData.task,
                time: formData.time,
                completed: false,
                date: correctDate
            })
            getToast('Запись успешно добавлена!', true)
            reset('add-task')
        }else{
            getToast('Ошибка! Заполните все поля!', false)
        }
    }

    return <Day dateNamesList={dateNamesList} onSubmit={onSubmit} tasks={tasks} correctDate={correctDate} />
}

const mapStateToProps = state => ({
    records: state.calendar.records,
    dateNamesList: state.calendar.dateNamesList
})

export default connect(mapStateToProps, { changeCompletedStatusOfRecord, deleteRecord, addNewRecord, reset })(DayContainer)