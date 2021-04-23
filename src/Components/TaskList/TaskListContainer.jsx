import TaskList from "./TaskList"
import { changeCompletedStatusOfRecord, deleteRecord, setTotalCount, setCurrentPage, addNewRecord, changeSettings } from '../../Redux/calendarReducer'
import { toast } from 'react-toastify'
import { useEffect, useState } from "react"
import { reset } from "redux-form"
import dateMonthMinusOne from "../../helpers/dateMonthMinusOne"
import removeZeroFromDate from "../../helpers/removeZeroFromDate"
import addZeroToTime from "../../helpers/addZeroToTime"
import mergeRecordsForPagination from "../../helpers/mergeRecordsForPagination"
import addZeroToDate from "../../helpers/addZeroToDate"
import TaskListItem from "./TaskListItem/TaskListItem"
import { connect } from "react-redux"
import filterAndSortRecords from "../../helpers/filterAndSortRecords"


const TaskListContainer = ({ records, changeCompletedStatusOfRecord, deleteRecord, totalCount, setTotalCount, currentPage, portionsSize, countOnPage, setCurrentPage, reset, addNewRecord, filter, changeSettings, sort }) => {

    useEffect(() => {
        toast.configure()
    }, [])

    useEffect(() => {
        setTotalCount(filteredRecords.length)
    }, [records, filter])

    useEffect(() => {
        setCurrentPage(Math.ceil(filteredRecords.length / countOnPage))
    }, [])

    useEffect(() => {
        if(!tasksWithPaginationClassify[currentPage - 1]){
            setCurrentPage(Math.ceil(filteredRecords.length / countOnPage))
        }
    }, [totalCount])

    useEffect(() => {
        if(sort === 'lastAdded'){
            setCurrentPage(Math.ceil(filteredRecords.length / countOnPage))
        }
    }, [sort, filter])

    useEffect(() => {
        const timer = setInterval(() => {
                setTime(addZeroToTime(`${new Date().getHours()}:${new Date().getMinutes()}`))
                if(date !== addZeroToDate(`${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}`)){
                    setDate(addZeroToDate(`${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}`))
                }
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, [])

    const getToast = (text, success) => {
        const options = { autoClose: 3000 }
        success ? toast.success(text, options) : toast.error(text, options)
    }

    const filteredRecords = filterAndSortRecords(records, filter, sort)
    const tasksWithPaginationClassify = mergeRecordsForPagination(filteredRecords, countOnPage)
    let tasks = tasksWithPaginationClassify[currentPage - 1] ? tasksWithPaginationClassify[currentPage - 1]
        .map(record => <TaskListItem 
                            key={record.id}
                            id={record.id}
                            date={record.date}
                            text={record.text}
                            time={record.time}
                            completed={record.completed}
                            changeCompletedStatusOfRecord={changeCompletedStatusOfRecord}
                            deleteRecord={deleteRecord}
                            getToast={getToast}
                        />) : []

    const onSubmit = formData => {
        if(formData.task && formData.time){
            const date = formData.date.split('-').join('.')
            addNewRecord({
                id: Date.now(),
                text: formData.task,
                time: formData.time,
                date: removeZeroFromDate(dateMonthMinusOne(date)),
                completed: false,
            })
            getToast('Запись успешно добавлена!', true)
            reset('add-task-list')
        }else{
            getToast('Ошибка! Заполните все поля!', false)
        }
    }

    const [time, setTime] = useState(addZeroToTime(`${new Date().getHours()}:${new Date().getMinutes()}`))
    const [date, setDate] = useState(addZeroToDate(`${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}`))

    const onSubmitSetting = formData => {
        changeSettings(formData)
        if(formData.sort === 'lastAdded'){
            if(filteredRecords.length){
                setCurrentPage(Math.ceil(filteredRecords.length / countOnPage))
            }
        }else{
            if(filteredRecords.length){
                setCurrentPage(1)
            }
        }
        getToast('Настройки успешно применены!', true)
    }

    return <TaskList
        portionsSize={portionsSize}
        totalCount={totalCount}
        currentPage={currentPage}
        countOnPage={countOnPage}
        setCurrentPage={setCurrentPage}
        date={date}
        time={time}
        onSubmitSetting={onSubmitSetting}
        tasks={tasks}
        onSubmit={onSubmit}
    />
}

const mapStateToProps = state => ({
    records: state.calendar.records,
    totalCount: state.calendar.totalCount,
    currentPage: state.calendar.currentPage,
    portionsSize: state.calendar.portionsSize,
    countOnPage: state.calendar.countOnPage,
    currentDate: state.calendar.currentDate,
    filter: state.calendar.settings.filter,
    sort: state.calendar.settings.sort
})

export default connect(mapStateToProps, { changeCompletedStatusOfRecord, deleteRecord, setTotalCount, setCurrentPage, reset, addNewRecord, changeSettings })(TaskListContainer)