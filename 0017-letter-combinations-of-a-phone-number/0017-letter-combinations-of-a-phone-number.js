/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];
    let answer = [];
    const letterMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    let prevs =[''];
    for (const digit of [...digits]) {
        answer = [];
        for (const prev of prevs) {
            for (const letter of letterMap[digit]) {
                answer.push(prev + letter);
            }
        }
        prevs = answer;
    }
    return answer;
};