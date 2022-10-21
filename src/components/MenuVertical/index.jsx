import React from 'react'
import './MenuVertical.css'
import Boton from '../Boton'
import meditation from '../../assets/meditation.svg'
import lifting from '../../assets/lifting.svg'
import bicycle from '../../assets/bicycle.svg'
import swimming from '../../assets/swiming.svg'

const MenuVertical = () => {
  const botones = [
    {icon: meditation, activity: "Meditation"},
    {icon: swimming, activity: "Swimming"},
    {icon: bicycle, activity: "Bicycle"},
    {icon: lifting, activity: "Lifting"},
    
  ]
  return (
    <aside>
      <div className="menu-options">
        {
          botones.map((boton, index) => <Boton props={boton} key={index} />)
        }
      </div>
      <p className='copy'>Copiryght, SportSee 2020</p>
    </aside>
  )
}

export default MenuVertical