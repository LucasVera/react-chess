import React from 'react'
import Piece from './Piece'

export default function Square(props) {
  const {
    color,
    pieceSvgUrl
  } = props

  return (
    <span className={`square ${color}`}>{pieceSvgUrl && <Piece imgUrl={pieceSvgUrl} />}</span>
  )
}
