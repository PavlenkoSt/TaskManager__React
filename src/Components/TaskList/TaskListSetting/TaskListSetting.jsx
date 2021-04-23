import { useEffect } from 'react'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import TaskListFilter from './TaskListFilter/TaskListFilter'
import s from './TaskListSetting.module.css'
import TaskListSort from './TaskListSort/TaskListSort'

const TaskListSetting = ({ initialize, handleSubmit, tasks }) => {

    useEffect(() => {
        initialize({ filter: 'all', sort: 'lastAdded' })
    }, [])

    if(!tasks.length){
        return null
    }

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

export default compose(
    reduxForm({ form: 'settings' })
)(TaskListSetting)