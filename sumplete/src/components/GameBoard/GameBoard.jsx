import {Cell} from '../Cell';

function GameBoard({gameValues}) {
  return (
    <div>
        {
            gameValues.map((num, index) => <Cell value={num} index={index}/>)
        }
    </div>
  )
}

export {GameBoard}