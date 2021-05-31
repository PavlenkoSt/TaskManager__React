import currentDate from "../helpers/currentDate"
import { addToLocalStore } from "../localStore/localStore"

export type RecordType = {
    id: number
    date: string
    text: string
    time: string
    completed: boolean
}

type SettingType = {
    filter: string
    sort: string
}

const CHANGE_ACTIVE_MONTH = 'CHANGE_ACTIVE_MONTH'
const CHANGE_COMPLETED_STATUS_OF_RECORD = 'CHANGE_COMPLETED_STATUS_OF_RECORD'
const DELETE_RECORD = 'DELETE_RECORD'
const ADD_NEW_RECORD = 'ADD_NEW_RECORD'
const CHANGE_ACTIVE_DATE_TO_CURRENT_DATE = 'CHANGE_ACTIVE_DATE_TO_CURRENT_DATE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const CHANGE_ACTIVE_MONTH_AND_YEAR = 'CHANGE_ACTIVE_MONTH_AND_YEAR'
const CHANGE_SETTINGS = 'CHANGE_SETTINGS'
const SYNCHRONIZE_RECORD_LIST_FROM_LOCAL_STORAGE = 'SYNCHRONIZE_RECORD_LIST_FROM_LOCAL_STORAGE'

export const changeActiveMonth = (month: number) => ({ type: CHANGE_ACTIVE_MONTH, month })
export const changeCompletedStatusOfRecord = (id: number, status: boolean) => ({ type: CHANGE_COMPLETED_STATUS_OF_RECORD, id, status })
export const deleteRecord = (id: number) => ({ type: DELETE_RECORD, id })
export const addNewRecord = (record: RecordType) => ({ type: ADD_NEW_RECORD, record })
export const changeActiveDateToCurrentDate = () => ({ type: CHANGE_ACTIVE_DATE_TO_CURRENT_DATE })
export const setTotalCount = (totalCount: number) => ({ type: SET_TOTAL_COUNT, totalCount })
export const setCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage })
export const changeActiveMonthAndYear = (year: number, month: number) => ({ type: CHANGE_ACTIVE_MONTH_AND_YEAR, year, month })
export const changeSettings = (settings: SettingType) => ({ type: CHANGE_SETTINGS, settings })
export const synchronizeRecordListFromLocalStorage = (recordList: Array<RecordType>) => ({ type: SYNCHRONIZE_RECORD_LIST_FROM_LOCAL_STORAGE, recordList })

const initialValue = {
    currentDate: currentDate(),
    activeDate: currentDate(),
    dateNamesList: {
        days: ['Вс', 'Пн' , 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsForDay: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    },
    records: [
        { id: 0, date: '2021.3.20', text: 'Купить хлеб', time: '11:00', completed: false },
        { id: 1, date: '2021.3.23', text: 'Купить молоко', time: '12:00', completed: false },
        { id: 2, date: '2021.3.23', text: 'Купить масло', time: '12:00', completed: false },
        { id: 3, date: '2021.3.23', text: 'Спасти Вселенную', time: '13:00', completed: true },
        { id: 4, date: '2021.3.23', text: 'Пропылесосить в будке у пса', time: '15:30', completed: false },
        { id: 5, date: '2021.3.20', text: 'Купить квартиру', time: '11:00', completed: false },
        { id: 6, date: '2021.3.19', text: 'Купить машину', time: '12:00', completed: true },
        { id: 7, date: '2021.3.22', text: 'Купить булку', time: '12:00', completed: false },
        { id: 8, date: '2021.3.21', text: 'Спасти Вселенную ещё раз', time: '13:00', completed: true },
        { id: 9, date: '2021.3.20', text: 'Покормить кроликов', time: '15:30', completed: false },
        { id: 10, date: '2021.3.26', text: 'Сьесть кроликов', time: '15:30', completed: false },
    ],
    settings: {
        filter: 'all',
        sort: 'lastAdded'
    },
    totalCount: 0,
    countOnPage: 5,
    currentPage: 1,
    portionsSize: 10,
}

type InitialValueType = typeof initialValue

const calendarReducer = (state = initialValue, action: any): InitialValueType => {
    switch(action.type){
        case CHANGE_ACTIVE_MONTH: {
            return {
                ...state,
                activeDate: {
                    ...state.activeDate, 
                    month: 
                        action.month < 0 ? 11
                        : action.month > 11 ? 0
                        : action.month,
                    year: 
                        action.month < 0 ? state.activeDate.year - 1 
                        : action.month > 11 ? state.activeDate.year + 1 
                        : state.activeDate.year
                }
            }
        }
        case CHANGE_COMPLETED_STATUS_OF_RECORD: {
            const newRecords = [...state.records.map(record => {
                if(record.id === action.id){
                    record.completed = action.status
                }
                return record
            })]
            addToLocalStore('records', newRecords)

            return {
                ...state,
                records: newRecords
            }
        }
        case DELETE_RECORD: {
            const recordsWithoutDelete = state.records.filter(record => record.id !== action.id)
            addToLocalStore('records', recordsWithoutDelete)
            return {
                ...state,
                records: recordsWithoutDelete
            }
        }
        case ADD_NEW_RECORD: {
            const recordsWithNewRecord = [...state.records, action.record]
            addToLocalStore('records', recordsWithNewRecord)
            return {
                ...state,
                records: recordsWithNewRecord
            }
        }
        case CHANGE_ACTIVE_DATE_TO_CURRENT_DATE: {
            return {
                ...state,
                activeDate: state.currentDate
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case CHANGE_ACTIVE_MONTH_AND_YEAR: {
            return {
                ...state,
                activeDate: {...state.activeDate, year: action.year, month: action.month}
            }
        }
        case CHANGE_SETTINGS: {
            return {
                ...state,
                settings: {
                    ...action.settings
                }
            }
        }
        case SYNCHRONIZE_RECORD_LIST_FROM_LOCAL_STORAGE: {
            return {
                ...state,
                records: action.recordList || []
            }
        }
        default: return state
    }
}

export default calendarReducer