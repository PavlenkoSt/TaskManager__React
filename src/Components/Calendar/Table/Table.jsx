import Body from "./Body/Body"
import Head from "./Head/Head"

const Table = ({ activeDate, dateNamesList, firstDayOfActiveMonth, lastDayNumberOfActiveMonth, changeActiveMonth }) => {

    return (
        <table>
            <Head 
                dateNamesList={dateNamesList}
                activeDate={activeDate}
                changeActiveMonth={changeActiveMonth}
            />
            <Body 
                firstDayOfActiveMonth={firstDayOfActiveMonth} 
                lastDayNumberOfActiveMonth={lastDayNumberOfActiveMonth} 
                />
        </table>
    )
}

export default Table