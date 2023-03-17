import {ValueCell, SumCell} from '../Cell';
import {solutionUtil} from '../../utils'

function GameBoard({ board, difficulty }) {
  const len = Math.sqrt(difficulty);
  const { rows, columns } = solutionUtil.splitBoard(board, difficulty);
  const rowSums = [];
  const columnSums = [];

  rows.forEach(row => rowSums.push(solutionUtil.generateSum(row)));
  columns.forEach(row => columnSums.push(solutionUtil.generateSum(row)));

  console.log("BOARD: ", board);
  console.log("ROWS: ", rows);
  console.log("COLUMNS: ", columns);
  console.log("SUMS ROW: ", rowSums);
  console.log("SUMS COLUMN: ", columnSums);

  return (
    <div>
      GameBoard
    </div>
  );
}

export { GameBoard };
