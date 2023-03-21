import {ValueCell, SumCell} from '../Cell';
import {gameUtil, generalUtil, solutionUtil} from '../../utils'
import { useEffect, useState } from 'react';

function GameBoard({ board, difficulty, updateBoard, handleGameEnd }) {
  const len = Math.sqrt(difficulty);
  
  const [rows, setRows] = useState(undefined);
  const [columns, setColumns] = useState(undefined);

  const [rowSums, setRowSums] = useState([]);
  const [columnSums, setColumnSums] = useState([]);

  const [solvedRowsColumns, setSolvedRowsColumns] = useState(undefined);

  const findCellAndUpdate = (cellId) => {
    let cell = board.find(cell => cell.id === cellId);
    let clicked = !cell.isCounted;
    updateBoard(cellId, clicked);
  }

  useEffect(() => {
    if(rows) {
      let rowSums = [];
      rows.forEach(row => rowSums.push(solutionUtil.generateSum(row)));
      setRowSums(rowSums);
    }
    if(columns) {
      let columnSums = [];
      columns.forEach(row => columnSums.push(solutionUtil.generateSum(row)));
      setColumnSums(columnSums);
    }
  }, [rows, columns]);

  useEffect(() => {
    let { rows, columns } = solutionUtil.splitBoard(board, difficulty);
    setRows(rows);
    setColumns(columns);
    if(rows && columns && rowSums && columnSums) setSolvedRowsColumns(gameUtil.checkRowsColumns(rows, columns));
  }, [board, difficulty])

  useEffect(() => {
    if(solvedRowsColumns) {
      if(solvedRowsColumns.solvedRows.every(row => row) && solvedRowsColumns.solvedColumns.every(column => column)) {
        handleGameEnd();
      }
    }
  }, [solvedRowsColumns])

  return solvedRowsColumns && (
    <div className='grid'>
      {board.map((cell, index) => {
        if(!((index + 1) % len)) {
          let sumIndex = Math.floor(index/len);
          return <>
            <ValueCell cellObj={cell} size={generalUtil.getSize(difficulty)} handleCellSelect={findCellAndUpdate} />
            <SumCell sum={rowSums[sumIndex]} size={generalUtil.getSize(difficulty)} className='hanswer' solved={solvedRowsColumns.solvedRows[sumIndex]} key={`${index}-row-sum-cell`}/>
          </>
        }
        return <ValueCell cellObj={cell} size={generalUtil.getSize(difficulty)} handleCellSelect={findCellAndUpdate} key={`${index}-value-cell`}/>
      })}
      {columnSums.map((sum, index) => 
        <SumCell sum={sum} size={generalUtil.getSize(difficulty)} className='vanswer' solved={solvedRowsColumns.solvedColumns[index]} key={`${index}-column-sum-cell`}/>
      )}
    </div>
  );
}

export { GameBoard };
