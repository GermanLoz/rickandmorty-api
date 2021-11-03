import React from 'react'
import personById from './id.jsx'

const favoriteData = () => {
    let person = window.localStorage.getItem('person')
    person = JSON.parse(person)
    if(person !== null){
        const datos = person.map( item => {
        let id = parseInt(item)
        const date = personById(id, 'id')
            .then( response => { 
                return response
            })
            return date
        })
        return datos
    } else {
        return false
    }
} 
export default favoriteData