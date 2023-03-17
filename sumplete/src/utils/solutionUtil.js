function generateSum(line) {

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
    const board = [];

    gameValues.forEach(num => {
        let randomBool = Math.random() < 0.5;
        board.push({value: num, solution: randomBool})
    });

    return board;
}
  
export const solutionUtil = {
    generateSolution,
    splitBoard,
    generateSum
};