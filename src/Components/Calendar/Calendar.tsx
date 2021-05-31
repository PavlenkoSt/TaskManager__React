import Table from "./Table/Table"
import Menu from "../Menu/Menu"

const Calendar = () => {

    return (
        <div id='outerContainer'>
            <Menu 
                outerContainer={'outerContainer'} 
                pageWrapId={'wrapper'} 
            />
            <div id='wrapper'>
                <Table />
            </div>
        </div>
    )
}

export default Calendar