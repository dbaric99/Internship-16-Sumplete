function generateBoardValues(difficulty) {
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

    return randomNumbers;
}

function checkRowsColumns(rows, columns) {
    let solvedRows = [];
    let solvedColumns = [];

    rows.forEach((row, index) => {
      let isSolved = row.every(obj => (obj.isCounted === obj.solution));
      solvedRows.push(isSolved);
    });

    columns.forEach((col, index) => {
      let isSolved = col.every(obj => (obj.isCounted === obj.solution));
      solvedColumns.push(isSolved);
    });

    return {solvedRows, solvedColumns};
}
  
export const gameUtil = {
  generateBoardValues,
  checkRowsColumns
};