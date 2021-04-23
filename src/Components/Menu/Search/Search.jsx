import { useEffect } from "react"
import { compose } from "redux"
import { Field, reduxForm } from "redux-form"
import s from './Search.module.css'


const Search = ({ months, initialize, activeDate, handleSubmit }) => {

    useEffect(() => {
        initialize({ year: activeDate.year, month: activeDate.month })
    }, [activeDate])
    
    const options = months.map((month, i) => <option value={i}>{month}</option>)
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

export default compose(
    reduxForm({ form: 'search' })
)(Search)