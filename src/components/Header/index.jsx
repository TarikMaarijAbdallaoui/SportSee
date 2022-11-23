import React from 'react'
import Logo from '../Logo'
import Menu from '../Menu'
import './Header.css'

/**
 * Component Header incliudes logo and menu
 * @Component
 * @returns {node} Header element
 */
const Header = () => {
  return (
    <header className='header'>
        <Logo />
        <Menu />
    </header>
  )
}

export default Header