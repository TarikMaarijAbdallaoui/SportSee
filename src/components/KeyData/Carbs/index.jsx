import React from 'react'
import PropTypes from 'prop-types'
import classes from './Carbs.module.css'
import icon from '../../../assets/apple.svg'

/**
 * Component shows Carbs
 * @Component
 * @param {string} data Carbs count
 * @returns 
 */
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

Carbs.propTypes ={
        /**
         * Carbs value
         */
        data: PropTypes.number   
}
export default Carbs