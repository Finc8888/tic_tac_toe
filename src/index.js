import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import swal from '@sweetalert/with-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Welcome from './components/Welcome.jsx';
import ButtonCounter from './components/ButtonCounter.jsx'


const gameName = 'Tic-Tac-Toe Super Game';
const onPick = value => {
	swal("Thanks for your rating!", `You rated us ${value}/3`, "success")
  }
   
  const MoodButton = ({ variant_data, rating, onClick }) => (
	<Button
	  variant={variant_data}
	  data-rating={rating}
	  className="mood-btn" 
	  onClick={() => onClick(rating)}
	>{rating}</Button>
  )
   
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Список покупок для {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
class Square extends React.Component {
  runAlert(){
	for(let item of [1,2,3,4,5,6,7,8,9]){console.log(item)}
	return (
		<div>
		<MoodButton 
			variant_data={'warning'}
		  rating={1} 
		  onClick={onPick}
		/>
	  </div>
	)
  }
  render() {
    return (
			<Button variant="outline-primary" className="square" onClick={
				()=>{this.props.onClick();
				// swal({
				// 	text: "How was your experience getting help with this issue?",
				// 	buttons: {
				// 	  cancel: "Close",
				// 	},
				// 	content: (
				// 		this.runAlert()
					 
				// 	)
				//   })
			}
			} >{this.props.value}
			</Button>
        
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return (
	<Square 
		value ={this.props.squares[i]}
		onClick ={()=>this.props.onClick(i)}/>);
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			history:[{
				squares : Array(9).fill(null)
			}],
			xIsNext : true,
		}
	}
	handleClick(i){
		const {history} = this.state;
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		console.log(squares);
		if(calculateWinner(squares) || squares[i]){
			return;
		}
		squares[i] = (this.state.xIsNext) ? 'X' : 'O';
		this.setState({
			history:history.concat([{
				squares:squares
			}]),
			xIsNext: !this.state.xIsNext,
		});
	}
  	render() {
	  const {history} = this.state;
	  const current = history[history.length - 1];
	  console.log('current',current);
	  const winner = calculateWinner(current.squares);

	  let status;
	  let phrase;
	  if(winner){
		  status = `Выиграл игрок ${winner}`;
	  }
	  else{
		  phrase = 'Следующий ход у игрока';
		  status = this.state.xIsNext ? `${phrase} X` : `${phrase} O`;
	  }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares = {current.squares} onClick = { i =>this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================
let calculateWinner = (squares)=>{
	let lines = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6],
	];
	for(let item of lines){
		const [a,b,c] = item;
		if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
			return squares[a];
		}
	}
	return null;
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
ReactDOM.render(<Welcome name={gameName}/>,document.getElementById('hi'));
ReactDOM.render(<ButtonCounter/>,document.getElementById('counter'));