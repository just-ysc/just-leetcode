/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let answer = 0;
    const cntMap = new Map();
    
    for (const char of [...s]) {
        if (!cntMap.has(char)) {
            cntMap.set(char, 0);
        }
        cntMap.set(char, cntMap.get(char) + 1);
    }

    let oddLetterIncluded = false;
    cntMap.forEach((value, key) => {
        if (value % 2 === 0) {
            answer += value;
        } else {
            answer += value - 1;
            oddLetterIncluded = true;
        }
    });
    if (oddLetterIncluded) {
        answer++;
    }

    return answer;
};