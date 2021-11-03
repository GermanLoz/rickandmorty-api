import React from 'react'
import InicioCard from '../components/inicioCard.jsx'
import { Link } from 'react-router-dom'

function Inicio(){

return (
    <div className="container">
        <div className="inicio">
          <div className="text-inicio">
              <h1>Rick and Morty Favorite List</h1>
              <p>create your list of favorite characters</p>
              <Link className="button-inicio" to="/search"> CREAR </Link>
          </div>
          <div className="about">
                <InicioCard />
          </div>
        </div>
    </div>
  )
}
export default Inicio;