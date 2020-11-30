import React from 'react'

export default function Square(props) {
  const {
    color
  } = props
  return (
    <span className={`square ${color}`}>
    </span>
  )
}
