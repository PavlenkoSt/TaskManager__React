export default (records, portionCount) => {
    let obj = Object.assign(records)
    const countIteration = Math.ceil(records.length / portionCount)
    const res = []
    for(let i = 1; i <= countIteration; i++){
        res[i - 1] = []
        for(let j = 0; j <= portionCount - 1; j++){
            if(obj[j]){
                res[i - 1].push(obj[j])
            }
        }
        obj = obj.filter((item, i) => i > portionCount - 1)
    }
    return res
}