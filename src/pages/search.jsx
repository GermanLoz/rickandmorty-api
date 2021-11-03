import React, {useState, useEffect} from 'react'
import Form from '../components/form.jsx'
import search from '../api/search.jsx'
import Card from '../components/card.jsx'
import setLocalStorage from '../localstorage/setLocalStorage.jsx'
import Mensaje from '../components/mensaje.jsx'

function Search(){
const [keyword, setKeyword] = useState('')
const [person, setPerson] = useState([])
const [guardar, setGuardar] = useState([])
const [mensaje, setMensaje] = useState(' ')

useEffect(()=>{
  if(keyword){
    search(keyword)
    .then( response => {
      if(Array.isArray(response)){
        setPerson(response)
        setMensaje(' ')
      }
      if(response === false){
        setMensaje(false)
        setPerson([])
      }
    })
  }
},[keyword])

useEffect(()=>{
  if(guardar.length !== 0){  
    const guardado = setLocalStorage(guardar)
  if(guardado == true) {
    setMensaje(true)
  } else {
    setMensaje(false)
  }
    setGuardar([])
  }
},[guardar])

setTimeout(() => {
    setMensaje(' ')  
}, 3000);

return (
    <div className="container">
      <div className="search">
          <Form setKeyword = {setKeyword}/>
          <Mensaje resultado = {mensaje} setMensaje = {setMensaje}/>
      <div className="container-from-person">
      {
       person ?
          person.map(item => {
          return <Card id={item.id} name={item.name} img={item.image} location={item.location} guardar={guardar} species={item.species} 
                      gender={item.gender} status={item.status} setGuardar={setGuardar}
                    />

            })
        : ' '
      }
        </div>
    </div>
</div>  
  )
}
export default React.memo(Search);