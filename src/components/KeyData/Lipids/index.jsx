import React from 'react'
import PropTypes from 'prop-types'
import icon from '../../../assets/cheeseburger.svg'
import classes from './Lipids.module.css'

/**
 * Component shows lipid count
 * @Component
 * @param {string} data Lipid count
 * @returns 
 */
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

Lipids.propTypes = {
  /**
   * lipids value
   */
  data: PropTypes.number
}

export default Lipids