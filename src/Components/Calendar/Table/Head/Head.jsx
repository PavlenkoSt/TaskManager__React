import Nav from "./Nav/Nav"


const Head = ({ dateNamesList, activeDate, changeActiveMonth }) => {

    const getDays = () => {
        const head = dateNamesList.days.map(day => <td key={day} >{day}</td>)
        const sunday = head.splice(0, 1)
        head.push(sunday)
        return head
    }

    return (
        <thead>
            <Nav activeDate={activeDate} dateNamesList={dateNamesList} changeActiveMonth={changeActiveMonth} />
            <tr>
                {getDays()}
            </tr>
        </thead>
    )
}

export default Head