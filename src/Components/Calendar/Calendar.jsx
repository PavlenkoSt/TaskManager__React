import { connect } from "react-redux"
import Table from "./Table/Table"
import { changeActiveMonth } from '../../Redux/calendarReducer'

const Calendar = ({ currentDate, activeDate, dateNamesList, changeActiveMonth }) => {

    const lastDayNumberOfActiveMonth = new Date(activeDate.year, activeDate.month + 1 , 0).getDate()
    const firstDayOfActiveMonth = new Date(activeDate.year, activeDate.month, 1).getDay()
    return (
        <div>
            <Table 
                activeDate={activeDate}
                dateNamesList={dateNamesList} 
                firstDayOfActiveMonth={firstDayOfActiveMonth} 
                lastDayNumberOfActiveMonth={lastDayNumberOfActiveMonth}
                changeActiveMonth={changeActiveMonth}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    currentDate: state.calendar.currentDate,
    activeDate: state.calendar.activeDate,
    dateNamesList: state.calendar.dateNamesList
})

export default connect(mapStateToProps, { changeActiveMonth })(Calendar)