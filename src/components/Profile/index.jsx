import React from 'react'
import Graphics from '../Graphics'
import Heading from '../Heading'
import './Profile.css'

const Profile = () => {
  const name = 'Tarik'
  return (
    <div className='profile'>
      <Heading name={name} />
      <Graphics />
    </div>
  )
}
export default Profile