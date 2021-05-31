export default (date: string) => {
    const dateArr = date.split('.').reverse()
    const resultDate = dateArr.map((el: string) => +el <= 9 ? '0' + el : el);
    return resultDate.join('.')
}