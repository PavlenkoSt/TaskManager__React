import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../../Redux/calendarReducer'
import { countOnPageSelector, currentPageSelector, portionsSizeSelector, totalCountSelector } from '../../../Redux/calendarSelectors'
import s from './Pagination.module.css'

const Pagination = () => {
    const dispatch = useDispatch()

    const paginationClickHandler = (i: number) => {
        dispatch(setCurrentPage(i))
    }

    const totalCount = useSelector(totalCountSelector)
    const countOnPage = useSelector(countOnPageSelector)
    const portionsSize = useSelector(portionsSizeSelector)
    const currentPage = useSelector(currentPageSelector)

    const pagesCount = Math.ceil(totalCount / countOnPage)
    let paginations = []
    for (let i = 1; i <= pagesCount; i++) {
        paginations.push(<button
            key={i}
            className={currentPage === i ? `${s.btn} ${s.active}` : `${s.btn}`}
            onClick={() => paginationClickHandler(i) }
             >{i}</button>);
    }
    
    const totalPortionsCount = pagesCount / portionsSize
    const [currentPortion, changeCurrentPortion] = useState(1)
    const leftPointPortion = (currentPortion - 1) * portionsSize + 1
    const rightPointPortion = currentPortion * portionsSize

    if(!paginations.length){
        return null
    }

    return (
        <div className={s.pagination}>
            { currentPortion > 1 && <button className={`${s.btn} ${s.portionChange} ${s.prev}`} onClick={() => { changeCurrentPortion(currentPortion - 1) }}></button> }
            {paginations.filter( (btn, i) => i + 1 >= leftPointPortion && i+1 <= rightPointPortion )}
            { currentPortion < totalPortionsCount && <button className={`${s.btn} ${s.portionChange}`} onClick={() => { changeCurrentPortion(currentPortion + 1) }}></button> }
        </div>
    )
}

export default Pagination