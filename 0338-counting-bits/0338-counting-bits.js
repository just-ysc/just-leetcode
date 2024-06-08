/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const answer = [];

    for (let i = 0; i < n + 1; i++) {
        let bitsCnt = 0;
        if (i === 0) {
            bitsCnt = 0;
        } else if (i % 2 === 0) {
            bitsCnt = answer[i / 2];
        } else {
            bitsCnt = answer[i - 1] + 1;
        }
        answer.push(bitsCnt);
    }

    return answer;
};