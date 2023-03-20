import { useEffect, useState } from "react";
import { Controls } from "../Controls";
import { GameBoard } from "../GameBoard";
import {gameUtil, solutionUtil} from "../../utils";

function Game() {
  const [difficulty, setDifficulty] = useState(9);
  const [solution, setSolution] = useState();

  const clickedCellBoardUpdate = (cellId, clicked) => {
    let newSolution = solution.map(cell => {
      if(cell.id === cellId) {
        cell.isCrossed = clicked;
      }
      return cell;
    });
    setSolution(newSolution);
  }

  useEffect(() => {
    let gameValues = gameUtil.generateBoardValues(difficulty);
    setSolution(solutionUtil.generateSolution(gameValues));
  }, [difficulty]);

  useEffect(() => {
    console.log("SOLUTION: ", solution);
  }, [solution])


  return (
    <div>
      <h1>Sumplete</h1>
      <h2>
        Delete numbers so each row/column adds up to the target number at the
        right/bottom.
      </h2>
      {solution && <GameBoard board={solution} updateBoard={clickedCellBoardUpdate} difficulty={difficulty}/>}
      <Controls changeDifficulty={(cells) => setDifficulty(cells)} />
    </div>
  );
}

export { Game };
