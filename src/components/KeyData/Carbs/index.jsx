import React from 'react'
import classes from './Carbs.module.css'
import icon from '../../../assets/apple.svg'

const Carbs = ({data}) => {
        return (
                <div className={classes.carbs}>
                    <div className={classes.icon}>
                            <img src={icon} alt="" />
                    </div>
                    <div className={classes.data}>
                            <p>{data}g</p>
                            <span>Glucides</span>
                    </div>
                </div>
              )
}

export default Carbs