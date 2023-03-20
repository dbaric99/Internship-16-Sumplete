import {ValueCell, SumCell} from '../Cell';
import {generalUtil, solutionUtil} from '../../utils'

function GameBoard({ board, difficulty }) {
  const len = Math.sqrt(difficulty);
  const { rows, columns } = solutionUtil.splitBoard(board, difficulty);
  const rowSums = [];
  const columnSums = [];

  rows.forEach(row => rowSums.push(solutionUtil.generateSum(row)));
  columns.forEach(row => columnSums.push(solutionUtil.generateSum(row)));

  return (
    <div className='grid'>
      {board.map((cell, index) => {
        if(!((index + 1) % len)) {     
          console.log(generalUtil.getSize(difficulty))        
          return <>
            <ValueCell cellObj={cell} size={generalUtil.getSize(difficulty)} />
            <SumCell sum={rowSums[Math.floor(index/len)]} size={generalUtil.getSize(difficulty)} />
          </>
        }
        return <ValueCell cellObj={cell} size={generalUtil.getSize(difficulty)} />
      })}
      {columnSums.map(sum => 
        <SumCell sum={sum} size={generalUtil.getSize(difficulty)} />
      )}
    </div>
  );
}

export { GameBoard };
