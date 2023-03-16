import { useEffect, useState } from "react";
import { Controls } from "../Controls";
import { GameBoard } from "../GameBoard";

function Game() {
  const [difficulty, setDifficulty] = useState(9);
  const [gameValues, setGameValues] = useState();

  function fillBoard() {
    const maxValue = Math.ceil(difficulty / 2);
    const optionsArr = Array.from({ length: maxValue }, (_, i) => i + 1);

    const randomNumbers = []
      .concat(
        ...Array.from(
          { length: Math.ceil(difficulty / maxValue) },
          () => optionsArr
        )
      )
      .sort(() => Math.random() - 0.5)
      .slice(0, difficulty);

    setGameValues(randomNumbers);
  }

  useEffect(() => {
    fillBoard();
  }, [difficulty]);

  return (
    <div>
      {gameValues && <GameBoard cellCount={difficulty} />}
      <Controls changeDifficulty={(cells) => setDifficulty(cells)} />
    </div>
  );
}

export { Game };
