import React from 'react'
import Graphics from '../Graphics'
import Heading from '../Heading'
import './Profile.css'

/**
 * Component Profile
 * @returns Profile container
 */
const Profile = () => {
 
  return (
    <div className='profile'>
      <Heading />
      <Graphics />
    </div>
  )
}
export default Profile