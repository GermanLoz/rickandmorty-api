const removeItem = (id) => {
    let item = window.localStorage.getItem('person')
    item = JSON.parse(item)
    let array = item.filter( item => item !== id)
    localStorage.setItem('person', JSON.stringify(array))
    if(id.length !== 0){
        return true
    }
}
export default removeItem