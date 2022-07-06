import React,{useState} from 'react'
import Square from "./Square";
import {calculateWinner}from "./helper";
function Board() {

    const [squares,setSquares]= useState((Array(9).fill(null)));
    const [xIsNext ,setxIsNext] = useState(true)
    const handleclick=(i)=>{
        if(calculateWinner(squares)||squares[i]){
            return;
        }
        const newSquares=squares.slice();
        newSquares[i]= xIsNext ? "X" :"O" ;
        setSquares(newSquares);
        setxIsNext(!xIsNext);
    }
 function render(i){
     return <Square value ={squares[i]} func ={ handleclick} i ={i}/>
 }
 const winner = calculateWinner(squares);
 let Status;
 if (winner) {
   Status = 'Winner: ' + winner
 } else {
   Status = 'Next player: ' + (xIsNext ? 'X' : 'O');
 }
 return (
     <>

     
     <div>
{Status};
<div className="board-row">
    {render(0)}
    {render(1)}
    {render(2)}
</div>
<div className="board-row">
{render(3)}
{render(4)}
{render(5)}
</div>
<div className="board-row">
{render(6)}
{render(7)}
{render(8)}
</div>
     </div>
     </>
 )
}

export default Board