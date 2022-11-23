import React from 'react'
import PropTypes from 'prop-types'

/**
 * Main layout component
 * @Component
 * @param {nodes} children 
 * @returns Main container
 */
const Layout = ({children}) => {
  return (
    <main>
        {children}
    </main>
  )
}

Layout.propTypes = {
  /**
   * Children elements
   */
  data: PropTypes.node
}

export default Layout