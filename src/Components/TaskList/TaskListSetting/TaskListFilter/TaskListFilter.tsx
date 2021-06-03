import { Field } from "redux-form"
import s from '../TaskListSetting.module.scss'


const TaskListFilter = () => {
    return (
        <div className={s.block}>
            <div className={s.header}>Показать задачи: </div>
            <div className='form-check'>
                <Field value='all' name='filter' component='input' type='radio' id='all' className='form-check-input'/>
                <label className="form-check-label" htmlFor="all">Все</label>
            </div>
            <div className='form-check'>
                <Field value='completed' name='filter' component='input' type='radio' id='completed' className='form-check-input'/>
                <label className="form-check-label" htmlFor="completed">Завершенные</label>
            </div>
            <div className='form-check'>
                <Field value='notCompleted' name='filter' component='input' type='radio' id='notCompleted' className='form-check-input'/>
                <label className="form-check-label" htmlFor="notCompleted">Незавершенные</label>
            </div>
        </div>
    )
}


export default TaskListFilter