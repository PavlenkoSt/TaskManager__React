import { AppStateType } from './reduxStore'

export const currentDateSelector = (state: AppStateType) => state.calendar.currentDate
export const activeDateSelector = (state: AppStateType) => state.calendar.activeDate
export const dateNamesListSelector = (state: AppStateType) => state.calendar.dateNamesList
export const recordsSelector = (state: AppStateType) => state.calendar.records
export const settingsSelector = (state: AppStateType) => state.calendar.settings
export const totalCountSelector = (state: AppStateType) => state.calendar.totalCount
export const countOnPageSelector = (state: AppStateType) => state.calendar.countOnPage
export const currentPageSelector = (state: AppStateType) => state.calendar.currentPage
export const portionsSizeSelector = (state: AppStateType) => state.calendar.portionsSize