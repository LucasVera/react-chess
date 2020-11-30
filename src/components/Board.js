import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Square from './Square'

export default class Board extends Component {
  static propTypes = {
    prop: PropTypes
  }

  state = {
    boardRows: []
  }

  componentDidMount() {
    const rows = [];
    for (let i = 1; i < 9; i++) {
      rows.push(this.getRow(i));
    }

    this.setState({ boardRows: rows });
  }

  getRow = (i) => {
    const squares = []
    for (let j = 1; j < 9; j++) {
      const even = (i + j) % 2;
      let color = even ? 'dark-square' : 'light-square';
      squares.push(<Square color={color} />);
    }

    return squares;
  }

  render() {
    const { currentPosition } = this.props;
    const { boardRows } = this.state;
    return (
      <Fragment className="board">
        {boardRows && boardRows.length > 0 && boardRows.map(row =>
          <Fragment className="row">
            {row && row.length > 0 && row.map(square => square)}
          </Fragment>
        )}
      </Fragment>
    )
  }
}
