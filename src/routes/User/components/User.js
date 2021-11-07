import React from 'react'
import PropTypes from 'prop-types'

export const User = ({ user, login, logout }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>welcome: {user}</h2>
    <br />
    <button className='btn btn-primary' onClick={login}>
      Login
    </button>
    {' '}
    <button className='btn btn-secondary' onClick={logout}>
      Logout
    </button>
  </div>
)
User.propTypes = {
  user: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}

export default User
