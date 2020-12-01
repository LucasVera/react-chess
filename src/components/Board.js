import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Square from './Square'
import { playRandomGame, playRandomMove, startNewGame } from '../services/chess'
import { getBoardPieces } from '../services/notationToComponents'

export default class Board extends Component {
  static propTypes = {
    currentPosition: PropTypes.string
  }

  state = {
    game: {},
    initialRows: [],
  }

  placePiecesInRows(game, rows) {
    const { currentPosition } = this.props;
    const newPosition = getBoardPieces(rows, game)
    console.log('newPosition', newPosition)
  }

  componentDidMount() {
    const rows = [];
    for (let i = 1; i < 9; i++) {
      rows.push(this.getRow(i));
    }

    //const game = playRandomGame(startNewGame());
    const game = playRandomGame(startNewGame(), 5);
    console.log('game', game.board(), typeof game)
    this.setState({
      game,
      initialRows: rows,
    })
  }

  getRow = (i) => {
    const squares = []
    for (let j = 1; j < 9; j++) {
      const even = (i + j) % 2;
      let color = even ? 'dark-square' : 'light-square';
      squares.push({
        color,
        pieceSvgUrl: null
      });
    }

    return squares;
  }

  makeRandomMove = () => {
    const { game } = this.state;
    this.setState({ game: playRandomMove(game) })
  }

  render() {
    const { game, initialRows } = this.state;
    let boardRows = getBoardPieces(initialRows, game);
    if (!game || typeof game.board !== 'function') {
      boardRows = initialRows;
    }
    return (
      <Fragment className="board">
        {boardRows && boardRows.length > 0 && boardRows.map(row =>
          <Fragment className="row">
            {row && row.length > 0 && row.map(({ color, pieceSvgUrl }) =>
              <Square color={color} pieceSvgUrl={pieceSvgUrl} />
            )}
          </Fragment>
        )}
        <button className="btn btn-primary" onClick={() => this.makeRandomMove()}>Make random move</button>
      </Fragment>
    )
  }
}
