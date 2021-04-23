import Item from "./Item"
import s from './Item.module.css'

const ItemContainer = ({ day, activeDate, currentDate, searchTasks}) => {
    const currentDayClass = (activeDate.year === currentDate.year && activeDate.month === currentDate.month && currentDate.day === day) ? s.current : s.cell

    const realyDate = new Date(currentDate.year, currentDate.month, currentDate.day)
    const dayDate = new Date(activeDate.year, activeDate.month, day)
 
    const deadlineClass = realyDate - dayDate > 0 ? s.deadline : ''

    const tasks = searchTasks(day)

    return <Item day={day} activeDate={activeDate} tasks={tasks} currentDayClass={currentDayClass} deadlineClass={deadlineClass} />
}

export default ItemContainer