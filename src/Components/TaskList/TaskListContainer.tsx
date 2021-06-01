import TaskList from "./TaskList"
import { setTotalCount, setCurrentPage, addNewRecord, changeSettings } from '../../Redux/calendarReducer'
import { toast } from 'react-toastify'
import { useEffect, useState } from "react"
import { reset } from "redux-form"
import dateMonthMinusOne from "../../helpers/dateMonthMinusOne"
import removeZeroFromDate from "../../helpers/removeZeroFromDate"
import addZeroToTime from "../../helpers/addZeroToTime"
import mergeRecordsForPagination from "../../helpers/mergeRecordsForPagination"
import addZeroToDate from "../../helpers/addZeroToDate"
import TaskListItem from "./TaskListItem/TaskListItem"
import { useDispatch, useSelector } from "react-redux"
import filterAndSortRecords from "../../helpers/filterAndSortRecords"
import { countOnPageSelector, currentPageSelector, recordsSelector, settingsSelector, totalCountSelector } from "../../Redux/calendarSelectors"
 

const TaskListContainer = () => {
    const dispatch = useDispatch()

    const records = useSelector(recordsSelector)
    const totalCount = useSelector(totalCountSelector)
    const currentPage = useSelector(currentPageSelector)
    const countOnPage = useSelector(countOnPageSelector)
    const settings = useSelector(settingsSelector)
    const filter = settings.filter
    const sort = settings.sort

    useEffect(() => {
        toast.configure()
    }, [])

    useEffect(() => {
        dispatch(setTotalCount(filteredRecords.length))
    }, [records, filter])

    useEffect(() => {
        dispatch(setCurrentPage(Math.ceil(filteredRecords.length / countOnPage)))
    }, [])

    useEffect(() => {
        if(!tasksWithPaginationClassify[currentPage - 1]){
            dispatch(setCurrentPage(Math.ceil(filteredRecords.length / countOnPage)))
        }
    }, [totalCount])

    useEffect(() => {
        if(sort === 'lastAdded'){
            dispatch(setCurrentPage(Math.ceil(filteredRecords.length / countOnPage)))
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

    const getToast = (text: string, success: boolean) => {
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
                            getToast={getToast}
                        />) : []

    const onSubmit = (formData: any) => {
        if(formData.task && formData.time){
            const date = formData.date.split('-').join('.')
            dispatch(addNewRecord({
                id: Date.now(),
                text: formData.task,
                time: formData.time,
                date: removeZeroFromDate(dateMonthMinusOne(date)),
                completed: false,
            }))
            getToast('Запись успешно добавлена!', true)
            dispatch(reset('add-task-list'))
        }else{
            getToast('Ошибка! Заполните все поля!', false)
        }
    }

    const [time, setTime] = useState(addZeroToTime(`${new Date().getHours()}:${new Date().getMinutes()}`))
    const [date, setDate] = useState(addZeroToDate(`${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}`))

    const onSubmitSetting = (formData: any) => {
        dispatch(changeSettings(formData))
        if(formData.sort === 'lastAdded'){
            if(filteredRecords.length){
                dispatch(setCurrentPage(Math.ceil(filteredRecords.length / countOnPage)))
            }
        }else{
            if(filteredRecords.length){
                dispatch(setCurrentPage(1))
            }
        }
        getToast('Настройки успешно применены!', true)
    }

    return <TaskList
        date={date}
        time={time}
        onSubmitSetting={onSubmitSetting}
        tasks={tasks}
        onSubmit={onSubmit}
    />
}

export default TaskListContainer