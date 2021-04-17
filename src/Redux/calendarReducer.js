import currentDate from "../helpers/currentDate"

const CHANGE_ACTIVE_MONTH = 'CHANGE_ACTIVE_MONTH'

export const changeActiveMonth = ( month ) => ({ type: CHANGE_ACTIVE_MONTH, month })

const initialValue = {
    currentDate: currentDate(),
    activeDate: currentDate(),
    dateNamesList: {
        days: ['Вс', 'Пн' , 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    }
}

const calendarReducer = (state = initialValue, action) => {
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
        default: return state
    }
}

export default calendarReducer