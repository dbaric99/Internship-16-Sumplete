import { useEffect, useState } from "react";
import { Controls } from "../Controls";
import { GameBoard } from "../GameBoard";
import {gameUtil, solutionUtil} from "../../utils";

function Game() {
  const [difficulty, setDifficulty] = useState(9);
  const [solution, setSolution] = useState();
  const [gameSolved, setGameSolved] = useState(false);
  const [gameValues, setGameValues] = useState(gameUtil.generateBoardValues(difficulty));

  const clickedCellBoardUpdate = (cellId, clicked) => {
    if(!solution) return;
    let newSolution = solution.map(cell => {
      if(cell.id === cellId) {
        cell.isCounted = clicked;
      }
      return cell;
    });
    setSolution(newSolution);
  }

  const handleGameEnd = () => {
    setGameSolved(true);
  }

  const handleRestart = () => {
    setGameValues(gameUtil.generateBoardValues(difficulty));
    gameUtil.clearBoard();
    setGameSolved(false);
  }

  useEffect(() => {
    setGameValues(gameUtil.generateBoardValues(difficulty));
    setSolution(solutionUtil.generateSolution(gameValues));
  }, [difficulty]);

  useEffect(() => {
    setSolution(solutionUtil.generateSolution(gameValues));
  }, [gameValues])

  return (
    <div>
      <h1>Sumplete</h1>
      <h2>
        Delete numbers so each row/column adds up to the target number at the
        right/bottom.
      </h2>
      {solution && solution.length === difficulty && <GameBoard board={solution} updateBoard={clickedCellBoardUpdate} difficulty={difficulty} handleGameEnd={handleGameEnd} />}
      <Controls changeDifficulty={(cells) => setDifficulty(cells)} />
      {gameSolved && 
        <>
          <h1>YOU WON!</h1>
          <button onClick={handleRestart}>Restart</button>
        </>}
    </div>
  );
}

export { Game };
