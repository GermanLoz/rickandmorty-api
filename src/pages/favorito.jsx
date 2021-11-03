import React, {useEffect, useState} from 'react'
import favoriteData from '../api/favoriteData.jsx'
import personById from '../api/id.jsx'
import Card from '../components/card.jsx'
import removeItem from '../localstorage/removeItem.jsx'
import Mensaje from '../components/mensaje.jsx'

function Favorito(){
  const [personajes, setPersonajes] = useState([])
  const [item, setItem] = useState([])
  const [eliminar, setEliminar] = useState([])
  const [mensaje, setMensaje] = useState(' ')

useEffect(()=>{
    let person = window.localStorage.getItem('person')
    person = JSON.parse(person)
    if(person !== null){
        const datos = person.map( item => {
        let id = parseInt(item)
        return personById(id, 'id')
            .then( response => {  
              setItem(response)
            })
        })
    } else {
        return false
    }
  },[])

  useEffect(() => {
     setPersonajes([...item, ...personajes])
  },[item])

  useEffect(()=>{
    if(eliminar){
      setPersonajes([])
      const eliminado = removeItem(eliminar)
      if(eliminado === true){
          setMensaje(true)
      }
      const arrayNew = personajes.filter( item => item.id !== eliminar)
      setItem(arrayNew)
    }
  },[eliminar])

setTimeout(() => {
    setMensaje(' ')  
}, 3000);

return (
  <div className="container">
    <div className="favorite">
          <Mensaje resultado = {mensaje} />
      <div className="container-from-person">
        {
          personajes ?
          personajes.map(item => {
          return <Card id={item.id} name={item.name} img={item.image} location={item.location} species={item.species} 
                      gender={item.gender} status={item.status} setEliminar={setEliminar}
                    />

            })
        : ' '
        }
      </div>
    </div>
  </div>
  )
}
export default React.memo(Favorito)