import { useDispatch, useSelector } from 'react-redux'
import { changeActiveMonth } from '../../../../../Redux/calendarReducer'
import { activeDateSelector, dateNamesListSelector } from '../../../../../Redux/calendarSelectors'
import s from './Nav.module.scss'

const Nav = () => {
    const dispatch = useDispatch()

    const activeDate = useSelector(activeDateSelector)
    const dateNamesList = useSelector(dateNamesListSelector)

    const monthClass = (activeDate.month === 11 || activeDate.month < 2) 
        ? s.winter : (activeDate.month >= 2 && activeDate.month < 5) 
        ? s.spring : (activeDate.month >= 5 && activeDate.month < 8)
        ? s.summer : s.autumn

    const changeMonthHandler = (month: number) => {
        dispatch(changeActiveMonth(month))
    }

    return (
        <tr>
            <td className={`${s.btnCell} ${s.prev}`}>
                <button onClick={() => changeMonthHandler(activeDate.month - 1)}>Назад</button>
            </td>
            <td colSpan={5} className={`${s.header} ${monthClass}`} >
                <div className={s.text} >
                    <span className={s.month} >{dateNamesList.months[activeDate.month]}</span>
                    <span>{activeDate.year}</span>
                </div>
            </td>
            <td className={s.btnCell}>
                <button onClick={() => changeMonthHandler(activeDate.month + 1)}>Вперед</button>
            </td>
        </tr>
    )
}

export default Nav