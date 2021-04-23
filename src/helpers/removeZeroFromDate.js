// export default date => {
//     const dateArr = date.split('.')
//     const result = dateArr.forEach(dateEl => {
//         if(dateEl[0] === 0){
//             dateEl = dateEl[1]
//         }
//         return dateEl
//     })
//     return result
// }

export default date => {
    const dateArr = date.split('.')
    const resultDate = dateArr.map(el => +el);
    return resultDate.join('.')
}