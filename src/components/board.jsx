import MoveCounter from "./moveCounter";
import Square from "./square";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  let winnerSquares = Array(9).fill(false);
  if (winner) {
    status = 'Winner: ' + squares[winner[0]];
    winnerSquares = [
      winner.includes(0),
      winner.includes(1),
      winner.includes(2),
      winner.includes(3),
      winner.includes(4),
      winner.includes(5),
      winner.includes(6),
      winner.includes(7),
      winner.includes(8)
    ];
  } else {
    if (squares.includes(null)){
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    else {
      status = 'Game Result: Draw';
    }
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} isWinningSquare={winnerSquares[0]}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} isWinningSquare={winnerSquares[1]}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} isWinningSquare={winnerSquares[2]}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} isWinningSquare={winnerSquares[3]}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} isWinningSquare={winnerSquares[4]}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} isWinningSquare={winnerSquares[5]}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} isWinningSquare={winnerSquares[6]}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} isWinningSquare={winnerSquares[7]}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} isWinningSquare={winnerSquares[8]}/>
      </div>
      <MoveCounter squares={squares}/>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}