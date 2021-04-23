import s from './Body.module.css'

const Body = ({ getValidCalendar }) => {
    return (
        <tbody className={s.tbody}>
            {getValidCalendar()}
        </tbody>
    )
}

export default Body