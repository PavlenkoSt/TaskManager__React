import { useState } from "react";
import Pagination from "./Pagination"
import s from './Pagination.module.css'


const PaginationContainer = ({ totalCount, countOnPage, portionsSize, currentPage, setCurrentPage }) => {

    const pagesCount = Math.ceil(totalCount / countOnPage)
    let paginations = []
    for (let i = 1; i <= pagesCount; i++) {
        paginations.push(<button
            key={i}
            className={currentPage === i ? `${s.btn} ${s.active}` : `${s.btn}`}
            onClick={() => { setCurrentPage(i) }}
             >{i}</button>);
    }
    
    const totalPortionsCount = pagesCount / portionsSize
    const [currentPortion, changeCurrentPortion] = useState(1)
    const leftPointPortion = (currentPortion - 1) * portionsSize + 1
    const rightPointPortion = currentPortion * portionsSize

    return <Pagination 
        paginations={paginations} 
        currentPortion={currentPortion} 
        changeCurrentPortion={changeCurrentPortion} 
        totalPortionsCount={totalPortionsCount} 
        leftPointPortion={leftPointPortion}
        rightPointPortion={rightPointPortion}
        />
}

export default PaginationContainer