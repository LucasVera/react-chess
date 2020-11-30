import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        Hi, this is home
        <Link to='/game'>Nuevo juego</Link>
      </div>
    )
  }
}
