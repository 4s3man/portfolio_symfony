import React from 'react'


class Square extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        date: new Date()
      }
    }

    componentDidMount(){
      this.timerId = setInterval(
        () => {
          this.setState({
            date: new Date()
          });
        },
        1000
      );
    }

    componentWillUnmount(){
      clearInterval(this.timerId);
    }

    render() {
      return (
        <button onClick={this.props.onClick}>{this.props.value || this.state.date.toLocaleTimeString()}</button>
      );
    }
}


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
    
  }

  render() {
    return (
      <div className='board'>
        {this.createBoard()}
      </div>
    );
  }

  createBoard() {
    var board = [];
    for (var i = 0; i < 9; i++) {
      board.push(this.renderSquare(i));
    }
    return board;
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    if ('X' !== squares[i] && 'O' !== squares[i]) {
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }
  }

  renderSquare(i, parentProps=null) {
    return <Square
      value={this.state.squares[i]}
      key={i}
      onClick={() => this.handleClick(i)}
    />
  }
}

export default class Game extends React.Component{
  render() {
    return (
      <Board />
    );
  }
}
