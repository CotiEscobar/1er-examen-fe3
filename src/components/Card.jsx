import React from 'react'

const Card = ({name, serie, movie}) => {
  return (
    <div className='card-container'>
      <h3>Los datos ingresados son:</h3>
      <p>Nombre y apellido: {name}</p>
      <p>Tu mejor serie: {serie}</p>
      <p>Tu mejor película: {movie}</p>
    </div>
  )
}

export default Card