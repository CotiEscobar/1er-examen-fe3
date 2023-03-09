import React from 'react'
import Card from './Card';
import '../styles/Form.css'
import { useState } from 'react';


const Form = () => {
  const [data, setData] = useState({
    fullName: '',
    serie: '',
    movie: ''
  });

  const [showCard, setShowCard] = useState(false)

  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Se envio el form')
    console.log(event) 

    const fullNameWithoutSpaces = data.fullName.trim()

    if(fullNameWithoutSpaces.length >= 3 
      && data.serie.length >= 6){     
      setShowCard(true)
    } else {
      setError(true)
    } 
}


  return (
    <>
      <h2>Contanos cual es tu serie y pelicula preferida :)</h2>
      <form onSubmit={handleSubmit} className='form-container'>
          <label>Nombre completo</label>
          <input type="text" className='input' onChange={(event) => setData({...data, fullName: event.target.value})}/>

          <label>Serie preferida</label>
          <input type="text" className='input' onChange={(event) => setData({...data, serie: event.target.value})}/>

          <label>Película preferida</label>
          <input type="text" className='input' onChange={(event) => setData({...data, movie: event.target.value})}/>

          <button className='sbmt-button'>Guardar mis datos</button>      
      </form>

      {
        showCard
        ?
        <Card
          name={data.fullName}  
          serie={data.serie}
          movie={data.movie}
        ></Card>
        :
        null
      }

      {
        error
        &&
        <div className='error-msg'>
          <p>Por favor chequea que la información sea correcta.</p>
        </div>
      }
    </>
  )
}

export default Form
