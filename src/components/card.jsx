import React, {useState, useEffect} from 'react'

const Card = (Props) => {
    const {name, img, location, species, gender, status, id, setGuardar , guardar, setEliminar} = Props
    const [color, setColor] = useState('')

    useEffect(()=>{
        if( status === 'unknown' ){
                setColor('grey')
        }
        if( status === 'Dead' ){
                setColor('red')
        }
        if( status === 'Alive' ){
                setColor('green')
        }
    },[status])

    return (
        <div className="personaje" key={id}>
                    { 
                 guardar ?
                    <button onClick={(e)=>setGuardar([...guardar, id])} className="guardar">FAVORITE</button>
                         : ' '
                 }
                 {
                     setEliminar ? 
                        <button onClick={(e)=>setEliminar(id)} className="guardar"><i class="far fa-trash-alt"></i></button>
                        : ' '
                 }
            <div>
                <img src={img} alt={name}/>
            </div>
            <div> 
                <h4 className="name">{name}</h4>
                <p className="status"><span className={color}>.</span>{status}-{gender}</p>
                <p className="location-name">LOCATION: {location.name}</p>
                <p className="specie">SPECIE: {species}</p>
            </div>
        </div>
    )
}
export default Card