export default (records, filter, sort) => {
    const filteredRecords = records
        .filter(record => {
            switch(filter){
                case 'all': {
                    return record
                }
                case 'completed' :{
                    return record.completed
                }
                case 'notCompleted' :{
                    return !record.completed
                }
                default: return record
            }
        })

    const filteredAndSortedRecords = filteredRecords
        .sort((a, b) => {
            switch(sort){
                case 'lastAdded': {
                    return a.id - b.id
                }
                case 'old': {
                    return +a.date.split('.').join('') - +b.date.split('.').join('')
                }
                case 'new': {
                    return +b.date.split('.').join('') - +a.date.split('.').join('')
                }
                default: return a - b
            }
        })
        
    return filteredAndSortedRecords
}
