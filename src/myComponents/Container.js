import React,{useState} from 'react'
import { Square } from './Square'

export const Container = () => {
    const [status, setStatus] = useState("X's Chance")
    var [squares, setSquares] = useState(Array(9).fill(null))
    const [isXturn, setisXturn] = useState(true)
    var [history, setHistory] = useState([{
        step:0,
        squares:Array(9).fill(null),
        isNextTurn: false
    }])
    const [index, setIndex] = useState(0)

    function checkWinner(){
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
                setStatus(squares[a]+" Wins!!");
                return squares[a];
            }
          }
          var count = 0;
        for(let i=0;i<squares.length;i++){
            if(squares[i]===null){
                count++;
            }
        }
        if(count===0){
            setStatus("Match Draw!!")
            // alert("Match draw");
            return true;
        }
          return null;
    }

    function handleClick(i,e) {
        // alert("isXturn");
        if(isXturn){
            if(squares[i]==null){
                squares[i]="X";
                setSquares(squares);
                setIndex(index+1);
                console.log(squares);
                console.log(index);
                let stepHistory={
                    step: index,
                    squares: squares,
                    isNextTurn: true
                };
                console.log(history);
                setHistory([history.concat(stepHistory)])
                setHistory(history);
                // setSquares(squares);
                setisXturn(false);
                setStatus("O's Chance")
            }
        }else{
            if(squares[i]==null){
                squares[i]="O";
                setSquares(squares);
                setIndex(index+1);
                console.log(index);
                let stepHistory={
                    step: index,
                    squares: squares,
                    isNextTurn: true
                };
                console.log(history);
                setHistory([...history,stepHistory])
                
                setisXturn(true);
                setStatus("X's Chance")
            }
        }
        // console.log(history);
        // checkWinner();
        // alert(checkWinner());
        if(checkWinner()){
            setSquares(Array(9).fill(null))
        }
    }
    return (
        <>
        <div id="status">{status}</div>
        <div id="container">
            <Square value={squares[0]} onClick={(e)=>handleClick(0,e)}/>
            <Square value={squares[1]} onClick={(e)=>handleClick(1,e)}/>
            <Square value={squares[2]} onClick={(e)=>handleClick(2,e)}/>
            <Square value={squares[3]} onClick={(e)=>handleClick(3,e)}/>
            <Square value={squares[4]} onClick={(e)=>handleClick(4,e)}/>
            <Square value={squares[5]} onClick={(e)=>handleClick(5,e)}/>
            <Square value={squares[6]} onClick={(e)=>handleClick(6,e)}/>
            <Square value={squares[7]} onClick={(e)=>handleClick(7,e)}/>
            <Square value={squares[8]} onClick={(e)=>handleClick(8,e)}/>  
        </div>
        </>
    )
}
