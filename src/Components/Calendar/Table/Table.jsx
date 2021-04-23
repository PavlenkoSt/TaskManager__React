import BodyContainer from "./Body/BodyContainer"
import Head from "./Head/Head"
import s from './Table.module.css'

const Table = ({ activeDate, dateNamesList, firstDayOfActiveMonth, lastDayNumberOfActiveMonth, changeActiveMonth, records, currentDate }) => {

    return (
        <table className={s.table}>
            <Head 
                dateNamesList={dateNamesList}
                activeDate={activeDate}
                changeActiveMonth={changeActiveMonth}
            />
            <BodyContainer 
                activeDate={activeDate}
                firstDayOfActiveMonth={firstDayOfActiveMonth} 
                lastDayNumberOfActiveMonth={lastDayNumberOfActiveMonth} 
                records={records}
                currentDate={currentDate}
                />
        </table>
    )
}

export default Table