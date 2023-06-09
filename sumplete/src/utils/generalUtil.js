const SIZE_CONSTANTS = {
    9: 'small',
    16: 'medium',
    25: 'big',
}

function getRandomBool() {
    return Math.random() < 0.5
}

function getSize(difficulty) {
    return SIZE_CONSTANTS[difficulty];
}
  
export const generalUtil = {
    getRandomBool,
    getSize
};