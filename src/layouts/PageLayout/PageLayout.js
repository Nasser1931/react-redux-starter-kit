import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>

    {' · '}
    <Link to='/contact' activeClassName='page-layout__nav-item--active'>Contact us</Link>
    {' · '}
    <Link to='/user' activeClassName='page-layout__nav-item--active'>User Login</Link>
    {' · '}
    <Link to='/about' activeClassName='page-layout__nav-item--active'>About us</Link>
    {' · '}
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
