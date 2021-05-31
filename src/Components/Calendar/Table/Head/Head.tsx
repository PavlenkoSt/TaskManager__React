import Nav from "./Nav/Nav"
import s from './Head.module.css'
import { useSelector } from "react-redux"
import { dateNamesListSelector } from "../../../../Redux/calendarSelectors"

const Head = () => {
    const dateNamesList = useSelector(dateNamesListSelector)

    const getDays = () => {
        const head = dateNamesList.days.map(day => <td key={day}>{day}</td>)
        const sunday = head.splice(0, 1)
        head.push(sunday[0])
        return head
    }

    return (
        <thead>
            <Nav />
            <tr className={s.days}>
                {getDays()}
            </tr>
        </thead>
    )
}

export default Head