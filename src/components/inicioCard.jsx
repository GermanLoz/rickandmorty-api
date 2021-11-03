import React, { useEffect, useState} from 'react'
import apiInicio from '../api/apiInicio.jsx'
import Card from './card.jsx'

const InicioCard = () => {
    const [person, setFourPerson] = useState([])
    useEffect(()=>{
        apiInicio().then( item => (
            setFourPerson(item)
        ))
    },[])
return(
    <>
      {
       person ?
          person.map(item => {
          return <Card id={item.id} name={item.name} img={item.image} location={item.location} species={item.species} 
                      gender={item.gender} status={item.status} 
                    />

            })
        : ' '
      }
    </>
 )
}

export default InicioCard