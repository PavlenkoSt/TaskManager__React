

const Body = ({ firstDayOfActiveMonth, lastDayNumberOfActiveMonth }) => {
    const getEmptyStart = items => {
        const condition = firstDayOfActiveMonth === 0 ? 6 : firstDayOfActiveMonth - 1
        for(let i = 1 ; i<= condition; i++){
            items.unshift(<td key={i - 10}></td>)
        }
        return items
    }

    const getDays = () => {
        const days = []
        for(let i = 1 ; i <= lastDayNumberOfActiveMonth; i++){
            days.push(i)
        }
        return days.map(day => <td key={day}>{day}</td>)
    }

    const groupedCalendar = items => {
        const arr = []
        for(let i = 1; i <= 6; i++){
            arr.push(items.splice(0, 7))
        }
        return arr.filter(group => group.length).map((group, i) => <tr key={i} >{group}</tr>)
    }

    const getValidCalendar = () => {
        return groupedCalendar(getEmptyStart(getDays()))
    }

    return (
        <tbody>
            {getValidCalendar()}
        </tbody>
    )
}

export default Body