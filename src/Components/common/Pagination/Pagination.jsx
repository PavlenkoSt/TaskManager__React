import s from './Pagination.module.css'

const Pagination = ({ paginations, currentPortion, changeCurrentPortion, totalPortionsCount, leftPointPortion, rightPointPortion }) => {

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