import React, {useState, useEffect} from 'react'

const Mensaje = (Props) => {
    const {resultado ,setMensaje} = Props
    const [mensaje, setKeyword] = useState('')
    const [color, setColor] = useState('')

    useEffect(()=>{
        if(resultado === ' '){
            setKeyword(' ')
            setColor('none')
        }
        if(resultado === false ){
            setKeyword('ERROR')
            setColor('mensaje-false')
        } if(resultado === true ){
            setKeyword('ACCION EXITOSA')
            setColor('mensaje-true')
        }
    },[resultado])



    return (
        <>
             <div className={color}>
                {mensaje}
             </div>
        </>
    )
}

export default Mensaje