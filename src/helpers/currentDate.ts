export default () => {
    const date = new Date()
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate()
    }
}