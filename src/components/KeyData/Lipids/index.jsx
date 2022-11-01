import React from 'react'
import icon from '../../../assets/cheeseburger.svg'
import classes from './Lipids.module.css'

const Lipids = ({data}) => {
  return (
    <div className={classes.lipids}>
        <div className={classes.icon}>
                <img src={icon} alt="" />
        </div>
        <div className={classes.data}>
                <p>{data}g</p>
                <span>Lipids</span>
        </div>
    </div>
  )
}

export default Lipids