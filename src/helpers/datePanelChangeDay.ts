export default (dateProp: string, plusMode: boolean) => {
    const [year, month, day] = dateProp.split('.')

    let date
    if(plusMode){
        date = new Date(+year, +month, +day + 1)
    }else{
        date = new Date(+year, +month, +day - 1)
    }

    const resYear = date.getFullYear()
    const resMonth = date.getMonth()
    const resDay = date.getDate()

    return `/day/${resYear}.${+resMonth + 1}.${resDay}`
}