import s from '../../Day/TaskForm/TaskForm.module.css'
import { reduxForm, Field, InjectedFormProps } from "redux-form"
import { ComponentType } from 'react'


const TaskListForm :ComponentType<InjectedFormProps<{}, {}, string>> = ({ handleSubmit }) => {
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
                        <Field component='input' name='date' type="date" className={s.input + ' form-control'} id="date" placeholder="Дата"/>
                        <label htmlFor="date">Дата</label>
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



export default reduxForm({ form: 'add-task-list' })(TaskListForm)
