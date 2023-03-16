import { useEffect, useState } from "react";
import { Controls } from "../Controls";
import { GameBoard } from "../GameBoard";
import {gameUtil, solutionUtil} from "../../utils";

function Game() {
  const [difficulty, setDifficulty] = useState(9);
  const [gameValues, setGameValues] = useState();

  useEffect(() => {
    setGameValues(gameUtil.fillBoard(difficulty));
  }, [difficulty]);

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
