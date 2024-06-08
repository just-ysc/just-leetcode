/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const answer = [];

    for (let i = 1; i <= numRows; i++) {
        const rows = [];
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) {
                rows.push(1);
            } else {
                rows.push(answer[i - 2][j - 1] + answer[i - 2][j]);
            }
        }
        answer.push(rows);
    }

    return answer;
};