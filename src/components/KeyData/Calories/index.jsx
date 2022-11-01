import React from 'react'
import icon from '../../../assets/energy.svg'
import classes from './Calories.module.css'
const Calories = ({data}) => {
        return (
                <div className={classes.calories}>
                    <div className={classes.icon}>
                            <img src={icon} alt="" />
                    </div>
                    <div className={classes.data}>
                            <p>{data}kCal</p>
                            <span>Calories</span>
                    </div>
                </div>
              )
}

export default Calories