import s from './TaskForm.module.scss'
import { reduxForm, Field, InjectedFormProps } from "redux-form"
import { ComponentType } from 'react'


const TaskForm: ComponentType<InjectedFormProps<{}, {}, string>> = ({ handleSubmit }) => {
    return (
        <>
            <a className={s.btnCollapsed} data-bs-toggle="collapse" href="#form" role="button" aria-expanded="false" aria-controls="form">+</a>
            <div className='collapse' id='form'>
                <form onSubmit={handleSubmit} className={s.form + ' card card-body'}>
                    <div className="form-floating mb-3">
                        <Field component='input' type="text" name='task' className={s.input + ' form-control'} id="task" placeholder="Задача"/>
                        <label htmlFor="task">Новая задача</label>
                    </div>
                    <div className="form-floating mb-3">
                        <Field component='input' name='time' type="time" className={s.input + ' form-control'} id="time" placeholder="Время"/>
                        <label htmlFor="time">Время</label>
                    </div>
                    <button className={s.submit} type="submit">Сохранить</button>
                </form>
            </div>
        </>
    )
}



export default reduxForm({ form: 'add-task' })(TaskForm)
