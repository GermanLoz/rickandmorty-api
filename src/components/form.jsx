import React,{useState} from 'react'

const Form = (Props)=>{
    const {setKeyword} = Props
    const [data, setData] = useState('')
    const sendKeyword = (e) => {
            e.preventDefault()
        if(data){ 
            return setKeyword(data)
        }
    }
return (
        <form onSubmit={(e)=>{sendKeyword(e)}} className="form-search">
            <input onChange={(e)=>{setData(e.target.value)}} type="text" placeholder="Personaje"/>
            <i onClick={(e)=>{sendKeyword(e)}} className="fas fa-search"></i>
            <input onClick={(e)=>{sendKeyword(e)}} type="submit"/>
        </form>
    )
} 

export default Form