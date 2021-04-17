

const Nav = ({ activeDate, dateNamesList, changeActiveMonth }) => {
    return (
        <tr>
            <td>
                <button onClick={() => changeActiveMonth(activeDate.month - 1)}>Назад</button>
            </td>
            <td colSpan='5'>
                <span>{dateNamesList.months[activeDate.month]}</span>
                <span>{activeDate.year}</span>
            </td>
            <td>
                <button onClick={() => changeActiveMonth(activeDate.month + 1)}>Вперед</button>
            </td>
        </tr>
    )
}

export default Nav