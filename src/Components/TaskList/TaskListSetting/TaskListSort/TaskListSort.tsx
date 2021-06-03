import { Field } from "redux-form"
import s from '../TaskListSetting.module.scss'


const TaskListSort = () => {
    return (
        <div className={s.block}>
            <div className={s.header}>Сортировать по:</div>
            <Field name='sort' className={`form-select ${s.select}`} component='select'>
                <option value='lastAdded'>Последние добавления</option>
                <option value='old'>Сначала старые</option>
                <option value='new'>Сначала новые</option>
            </Field>
        </div>
    )
}

export default TaskListSort