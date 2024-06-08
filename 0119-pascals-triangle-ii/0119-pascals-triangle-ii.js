/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const answer = [];
    const dpTable = new Map();
    const getKey = (i, j) => `${i}_${j}`;
    const getCell = (i, j) => {
        if (j <= 0 || j >= i) return 1;
        const key = getKey(i, j);
        if (!dpTable.has(key)) dpTable.set(key, getCell(i - 1, j - 1) + getCell(i - 1, j));
        return dpTable.get(key);
    }

    for (let i = 0; i <= rowIndex; i++) {
        answer.push(getCell(rowIndex, i));
    }
    return answer;
};