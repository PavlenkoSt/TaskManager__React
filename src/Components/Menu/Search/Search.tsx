import { ComponentType, useEffect } from "react"
import { useSelector } from "react-redux"
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { activeDateSelector, dateNamesListSelector } from "../../../Redux/calendarSelectors"
import s from './Search.module.scss'

const Search: ComponentType<InjectedFormProps<{}, {}, string>> = ({ initialize, handleSubmit }) => {
    const activeDate = useSelector(activeDateSelector)
    const dateNamesList = useSelector(dateNamesListSelector)
    const months = dateNamesList.months

    useEffect(() => {
        initialize({ year: activeDate.year, month: activeDate.month })
    }, [activeDate])
    
    const options = months.map((month, i) => <option value={i} key={i} >{month}</option>)
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <h2 className={s.header}>Найти месяц:</h2>
            <Field component='input' type="number" name='year' className={s.input} placeholder='Год'/>
            <Field component='select' name='month' className={s.input} >
                {options}
            </Field>
            <button type='submit' className={s.btn} >Перейти</button>
        </form>
    )
}

export default reduxForm({ form: 'search' })(Search)