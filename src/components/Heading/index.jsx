import React from 'react'
import './Heading.css'

const Heading = ({name}) => {
  return (
    <header>
        <h2 className='title'>Bonjour <span className='name'>{name}</span></h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  )
}

export default Heading