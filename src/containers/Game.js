import React, { Component } from 'react'
import Board from '../components/Board'

export default class Game extends Component {
  render() {
    return (
      <div style={{ width: '400px', height: '400px' }}>
        <Board className="board" />
      </div>
    )
  }
}
