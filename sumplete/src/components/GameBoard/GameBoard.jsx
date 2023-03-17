import {ValueCell, SumCell} from '../Cell';
import {solutionUtil} from '../../utils'

function GameBoard({ board, difficulty }) {
  const len = Math.sqrt(difficulty);
  const { rows, columns } = solutionUtil.splitBoard(board, difficulty);
  const rowSums = [];
  const columnSums = [];

  rows.forEach(row => rowSums.push(solutionUtil.generateSum(row)));
  columns.forEach(row => columnSums.push(solutionUtil.generateSum(row)));

  return (
    <div>
      {board.map((cell, index) => {
        if(!(index % len)) {
          return <>
            <ValueCell cellObj={cell}/>
            <SumCell sum={rowSums[index/len]}/>
          </>
        }
        return <ValueCell cellObj={cell}/>
      })}
      {columnSums.map(sum => 
        <SumCell sum={sum} />
      )}
    </div>
  );
}

export { GameBoard };
