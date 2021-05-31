import { RecordType } from "../Redux/calendarReducer"

export default (records: Array<RecordType>, portionCount: number) => {
    let obj = Object.assign(records)
    const countIteration = Math.ceil(records.length / portionCount)
    const res: Array<Array<RecordType>> = []
    for(let i = 1; i <= countIteration; i++){
        res[i - 1] = []
        for(let j = 0; j <= portionCount - 1; j++){
            if(obj[j]){
                res[i - 1].push(obj[j])
            }
        }
        obj = obj.filter((item: RecordType, i: number) => i > portionCount - 1)
    }
    return res
}