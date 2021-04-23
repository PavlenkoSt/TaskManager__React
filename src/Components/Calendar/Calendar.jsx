import { connect } from "react-redux"
import Table from "./Table/Table"
import { changeActiveMonth } from '../../Redux/calendarReducer'
import Menu from "../Menu/Menu"

const Calendar = ({ currentDate, activeDate, dateNamesList, changeActiveMonth, records }) => {
    const lastDayNumberOfActiveMonth = new Date(activeDate.year, activeDate.month + 1 , 0).getDate()
    const firstDayOfActiveMonth = new Date(activeDate.year, activeDate.month, 1).getDay()

    return (
        <div id='outerContainer'>
            <Menu outerContainer={'outerContainer'} pageWrapId={'wrapper'} months={dateNamesList.months} activeDate={activeDate} />
            <div id='wrapper'>
                <Table 
                    activeDate={activeDate}
                    dateNamesList={dateNamesList} 
                    firstDayOfActiveMonth={firstDayOfActiveMonth} 
                    lastDayNumberOfActiveMonth={lastDayNumberOfActiveMonth}
                    changeActiveMonth={changeActiveMonth}
                    records={records}
                    currentDate={currentDate}
                />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentDate: state.calendar.currentDate,
    activeDate: state.calendar.activeDate,
    dateNamesList: state.calendar.dateNamesList,
    records: state.calendar.records
})

export default connect(mapStateToProps, { changeActiveMonth })(Calendar)