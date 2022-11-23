import React from 'react'
import PropTypes from 'prop-types'
import icon from '../../../assets/energy.svg'
import classes from './Calories.module.css'

/**
 * Component shows Calories
 * @Component
 * @param {string} data Calorie count
 * @returns 
 */
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

Calories.propTypes = {
        /**
         * Calories value
         */
        data: PropTypes.number
}

export default Calories