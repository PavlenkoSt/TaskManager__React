export const addToLocalStore = (name: string, data: any) => {
    const json = JSON.stringify(data)
    localStorage.setItem(name, json)
}

export const getFromLocalStore = (name: string) => {
    const json: any = localStorage.getItem(name)
    return JSON.parse(json)
}