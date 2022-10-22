import React from 'react'
import Graphics from '../Graphics'
import Heading from '../Heading'
import './Profile.css'
import {useParams} from 'react-router-dom'

const Profile = () => {
  const {id} = useParams()
 
  const name = 'Tarik'
  return (
    <div className='profile'>
      <Heading />
      <Graphics />
    </div>
  )
}
export default Profile