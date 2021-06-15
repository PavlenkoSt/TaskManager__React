import currentDate from "../../helpers/currentDate"
import calendarReducer, { 
    changeActiveMonth, changeCompletedStatusOfRecord, deleteRecord, addNewRecord, changeActiveDateToCurrentDate, setTotalCount, setCurrentPage,
    changeActiveMonthAndYear, changeSettings, synchronizeRecordListFromLocalStorage
} from "../calendarReducer"

const state = {
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

describe('calendar reducer', () => {

    it('activeDate should be changed', () => {
        const action = changeActiveMonth(2)
        const modernizedStatePosts = calendarReducer(state, action)
        expect(modernizedStatePosts.activeDate.month).toBe(2)
    })

    it('completed status of recorsd[0] should be true', () => {
        const action = changeCompletedStatusOfRecord(0, true)
        const modernizedStatePosts = calendarReducer(state, action)
        expect(modernizedStatePosts.records[0].completed).toBe(true)
    })

    it('records length should be 10', () => {
        const action = deleteRecord(0)
        const modernizedStatePosts = calendarReducer(state, action)
        expect(modernizedStatePosts.records.length).toBe(10)
    })

    it('records length should be 12', () => {
        const newRecord = {
            id: 22, date: '2021.3.20', text: 'some task', time: '11:00', completed: false 
        }
        const action = addNewRecord(newRecord)
        const modernizedStatePosts = calendarReducer(state, action)
        expect(modernizedStatePosts.records.length).toBe(12)
    })

    it('active date should be current date', () => {
        const action = changeActiveDateToCurrentDate()
        const modernizedStatePosts = calendarReducer(state, action)
        expect(modernizedStatePosts.activeDate).toBe(state.currentDate)
    })

    it('total count should be 20', () => {
        const action = setTotalCount(20)
        const modernizedStatePosts = calendarReducer(state, action)
        expect(modernizedStatePosts.totalCount).toBe(20)
    })

    it('current page should be 2', () => {
        const action = setCurrentPage(2)
        const modernizedStatePosts = calendarReducer(state, action)
        expect(modernizedStatePosts.currentPage).toBe(2)
    })

    it('year in current date should be 2020', () => {
        const action = changeActiveMonthAndYear(2020, 1)
        const modernizedStatePosts = calendarReducer(state, action)
        expect(modernizedStatePosts.activeDate.year).toBe(2020)
    })

    it('filter in setting should be - completed', () => {
        const action = changeSettings({
            filter: 'completed',
            sort: 'lastAdded'
        })
        const modernizedStatePosts = calendarReducer(state, action)
        expect(modernizedStatePosts.settings.filter).toBe('completed')
    })

    it('records length should be 2', () => {
        const recordListFromLS = [
            { id: 0, date: '2021.3.20', text: 'Купить хлеб', time: '11:00', completed: false },
            { id: 1, date: '2021.3.23', text: 'Купить молоко', time: '12:00', completed: false },
        ]
        const action = synchronizeRecordListFromLocalStorage(recordListFromLS)
        const modernizedStatePosts = calendarReducer(state, action)
        expect(modernizedStatePosts.records.length).toBe(2)
    })
})