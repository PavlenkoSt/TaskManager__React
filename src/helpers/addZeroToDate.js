export default date => {
    const dateArr = date.split('.').reverse()
    const resultDate = dateArr.map(el => +el <= 9 ? '0' + el : el);
    return resultDate.join('.')
}