import { connect } from "react-redux"
import Table from "./Table/Table"
import { changeActiveMonth } from '../../Redux/calendarReducer'
import Menu from "../Menu/Menu"

const Calendar = ({ activeDate, dateNamesList }) => {

    return (
        <div id='outerContainer'>
            <Menu outerContainer={'outerContainer'} pageWrapId={'wrapper'} months={dateNamesList.months} activeDate={activeDate} />
            <div id='wrapper'>
                <Table />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    activeDate: state.calendar.activeDate,
    dateNamesList: state.calendar.dateNamesList,
})

export default connect(mapStateToProps, { changeActiveMonth })(Calendar)