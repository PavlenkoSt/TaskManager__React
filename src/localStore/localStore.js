export const addToLocalStore = (name, data) => {
    const json = JSON.stringify(data)
    localStorage.setItem(name, json)
}

export const getFromLocalStore = (name) => {
    const json = localStorage.getItem(name)
    return JSON.parse(json)
}