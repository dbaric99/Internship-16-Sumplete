import { generalUtil } from "./generalUtil";

function generateSum(line) {
    return line.filter(obj => obj.solution)
               .reduce((acc, curr) => acc + curr.value, 0);
}

function splitBoard(board, difficulty) {
    const len = Math.sqrt(difficulty);
    const rows = [];
    const columns = [];

    for(let i = 0; i < len; i++) {
        const row = [];
        const column = [];
        for(let j = 0; j < len; j++) {
            const indexRow = i * len + j;
            const indexCol = j * len + i;
            row.push(board[indexRow]);
            column.push(board[indexCol]);
        }
        rows.push(row);
        columns.push(column);
    }
    return {rows, columns};
}

function generateSolution(gameValues) {
    console.log("GAME VALUES: ", gameValues);
    const board = [];

    gameValues.forEach((num, index) => {
        board.push({id: index, value: num, solution: generalUtil.getRandomBool(), isCounted: true})
    });

    return board;
}
  
export const solutionUtil = {
    generateSolution,
    splitBoard,
    generateSum
};