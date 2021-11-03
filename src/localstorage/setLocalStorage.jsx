import React from 'react'

const setLocalStorage = (id)=>{    
        let test;
        let person = localStorage.getItem('person');
            person = JSON.parse(person)
            if(person && person.includes(id[0]) === false ){
                    if(person.length !== 0){ 
                        person.map( item => { 
                                id.push(item)
                                localStorage.setItem('person', JSON.stringify(id))
                                test = true
                        }) 
                    } else {
                             localStorage.setItem('person', JSON.stringify(id))
                        }
               } else {
                    test = false
               }
            if(person == null){
                    localStorage.setItem('person', JSON.stringify(id))
                    test = true
                }
                return test
        }
export default setLocalStorage