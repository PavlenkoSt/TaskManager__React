import { ReactElement } from "react"
import { useSelector } from "react-redux"
import { JsxElement } from "typescript"
import { activeDateSelector, currentDateSelector, recordsSelector } from "../../../../Redux/calendarSelectors"
import Body from "./Body"
import s from './Body.module.css'
import Item from "./Item/Item"

type SearchTasksType = {
    text: string
    time: string
    completed: boolean
    id: number
}

const BodyContainer = () => {

    const activeDate = useSelector(activeDateSelector)
    const records = useSelector(recordsSelector)

    const lastDayNumberOfActiveMonth = new Date(activeDate.year, activeDate.month + 1 , 0).getDate()
    const firstDayOfActiveMonth = new Date(activeDate.year, activeDate.month, 1).getDay()

    const getEmptyStart = (items: Array<ReactElement>) => {
        const condition = firstDayOfActiveMonth === 0 ? 6 : firstDayOfActiveMonth - 1
        for(let i = 1 ; i<= condition; i++){
            items.unshift(<td key={i - 1000}></td>)
        }
        return items
    }

    const searchTasks = (day: string) => {
        let tasks: Array<SearchTasksType> = []
        records.forEach(record => {
            const [recordYear, recordMonth, recordDay] = record.date.split('.')
            if( +recordYear === activeDate.year && +recordMonth === activeDate.month && +recordDay === +day ){
                tasks.push({
                    text: record.text,
                    time: record.time,
                    completed: record.completed,
                    id: record.id
                })
            }
        })
        
        let taskItem
        if(tasks.length){
            const completedUlClass = tasks.every(task => task.completed) ? s.completedUl : ' '
            taskItem = tasks.map(task => <li className={task.completed ? s.completed : ''} key={task.id}><span>{task.text}</span> - <span>{task.time}</span></li>)
            return <ul className={s.list + ' ' + completedUlClass}>{taskItem}</ul>
        }else{
            return null
        }
    }

    const getDays = () => {
        const days = []
        for(let i = 1 ; i <= lastDayNumberOfActiveMonth; i++){
            days.push(i)
        }
        return days.map(day => <Item 
            key={day}
            day={day}
            searchTasks={searchTasks}
            />
        )
    }

    const getEmptyEnd = (days: any) => {
        if(days.length / 7 === Math.round(days.length / 7)){
            return days
        }else{
            days.push(<td key={days.length + 1000} ></td>)
            getEmptyEnd(days)
        }
        return days
    }

    const groupedCalendar = (items: Array<JsxElement>) => {
        const arr = []
        for(let i = 1; i <= 6; i++){
            arr.push(items.splice(0, 7))
        }
        return arr.filter(group => group.length).map((group, i) => <tr key={i} >{group}</tr>)
    }

    const getValidCalendar = () => {
        return groupedCalendar(
            getEmptyEnd(
                getEmptyStart(
                    getDays()
                )
            )
        )
    }

    return <Body getValidCalendar={getValidCalendar}/>
}

export default BodyContainer