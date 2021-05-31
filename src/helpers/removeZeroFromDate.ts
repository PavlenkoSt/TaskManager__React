export default (date: string) => {
    const dateArr = date.split('.')
    const resultDate = dateArr.map((el: string) => +el);
    return resultDate.join('.')
}