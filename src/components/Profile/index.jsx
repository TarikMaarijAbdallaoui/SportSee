import React from 'react'
import Graphics from '../Graphics'
import Heading from '../Heading'
import './Profile.css'
import {useParams} from 'react-router-dom'

/**
 * Component Profile
 * @returns Profile container
 */
const Profile = () => {
  const {id} = useParams()
 
  return (
    <div className='profile'>
      <Heading />
      <Graphics />
    </div>
  )
}
export default Profile