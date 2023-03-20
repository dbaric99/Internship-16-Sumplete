import {ValueCell, SumCell} from '../Cell';
import {generalUtil, solutionUtil} from '../../utils'

function GameBoard({ board, difficulty, updateBoard }) {
  const len = Math.sqrt(difficulty);
  const { rows, columns } = solutionUtil.splitBoard(board, difficulty);
  const rowSums = [];
  const columnSums = [];

  rows.forEach(row => rowSums.push(solutionUtil.generateSum(row)));
  columns.forEach(row => columnSums.push(solutionUtil.generateSum(row)));

  const findCellAndUpdate = (cellId) => {
    let cell = board.find(cell => cell.id === cellId);
    let clicked = !cell.isCrossed;
    updateBoard(cellId, clicked);
  }

  return (
    <div className='grid'>
      {board.map((cell, index) => {
        if(!((index + 1) % len)) {
          return <>
            <ValueCell cellObj={cell} size={generalUtil.getSize(difficulty)} handleCellSelect={findCellAndUpdate}/>
            <SumCell sum={rowSums[Math.floor(index/len)]} size={generalUtil.getSize(difficulty)} className='hanswer' />
          </>
        }
        return <ValueCell cellObj={cell} size={generalUtil.getSize(difficulty)} handleCellSelect={findCellAndUpdate} />
      })}
      {columnSums.map(sum => 
        <SumCell sum={sum} size={generalUtil.getSize(difficulty)} className='vanswer' />
      )}
    </div>
  );
}

export { GameBoard };
