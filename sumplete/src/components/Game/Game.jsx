import { useEffect, useState } from "react";
import { Controls } from "../Controls";
import { GameBoard } from "../GameBoard";
import {gameUtil, solutionUtil} from "../../utils";

function Game() {
  const [difficulty, setDifficulty] = useState(9);
  const [gameValues, setGameValues] = useState();

  useEffect(() => {
    setGameValues(gameUtil.generateBoardValues(difficulty));
  }, [difficulty]);

  useEffect(() => {
    if(!gameValues) return;
    const solutionArr = solutionUtil.generateSolution(gameValues);
    console.log("SOLUTION: ", solutionArr);
    const {rows, columns} = solutionUtil.splitBoard(solutionArr, difficulty);
    console.log("ROWS:", rows);
    console.log("COLUMNS:", columns);
  }, [gameValues])

  return (
    <div>
      <h1>Sumplete</h1>
      <h2>
        Delete numbers so each row/column adds up to the target number at the
        right/bottom.
      </h2>
      {gameValues && <GameBoard gameValues={gameValues} />}
      <Controls changeDifficulty={(cells) => setDifficulty(cells)} />
    </div>
  );
}

export { Game };
