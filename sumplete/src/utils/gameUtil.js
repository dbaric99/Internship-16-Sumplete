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
  
export const gameUtil = {
  generateBoardValues,
};