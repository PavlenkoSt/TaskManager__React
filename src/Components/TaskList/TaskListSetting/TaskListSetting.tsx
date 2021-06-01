import { ComponentType, useEffect } from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import TaskListFilter from './TaskListFilter/TaskListFilter'
import s from './TaskListSetting.module.css'
import TaskListSort from './TaskListSort/TaskListSort'

const TaskListSetting :ComponentType<InjectedFormProps<{}, {}, string>>  = ({ initialize, handleSubmit }) => {

    useEffect(() => {
        initialize({ filter: 'all', sort: 'lastAdded' })
    }, [])

    return (
        <>
            <a className={s.btnToggle} data-bs-toggle="collapse" href="#setting" role="button" aria-expanded="false" aria-controls="setting"></a>
            <div className='collapse' id='setting'>
                <form onSubmit={handleSubmit} className={s.form} >
                    <div className={s.flex}>
                        <TaskListFilter/>
                        <TaskListSort/>
                    </div>
                    <button className={s.btn} type='submit'>Принять</button>
                </form>
            </div>
        </>
    )
}

export default reduxForm({ form: 'settings' })(TaskListSetting)