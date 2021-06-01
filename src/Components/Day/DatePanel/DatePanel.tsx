import { FC } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import datePanelChangeDay from '../../../helpers/datePanelChangeDay'
import { dateNamesListSelector } from '../../../Redux/calendarSelectors'
import s from './DatePanel.module.css'

type DatePanelPropsType = {
    date: string
}

const DatePanel: FC<DatePanelPropsType> = ({ date }) => {
    const dateNamesList = useSelector(dateNamesListSelector)
    const monthNames = dateNamesList.months

    const [year, month, day] = date.split('.')
    
    return (
        <header className={s.header}>
            <NavLink className={s.calendar} to='/'></NavLink>
            <div className={s.main}>
                <NavLink className={s.arrPrev} to={datePanelChangeDay(date, false)}></NavLink>
                <span className={s.date}>{`${day} ${monthNames[+month]} ${year}`}</span>
                <NavLink className={s.arrNext} to={datePanelChangeDay(date, true)}></NavLink>
            </div>
        </header>
    )
}

export default DatePanel