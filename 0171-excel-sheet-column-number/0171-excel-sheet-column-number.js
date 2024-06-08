/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let answer = 0;
    const alphaNum = 26;
    const alphaBase = 'A'.charCodeAt(0);
    for (const ch of columnTitle) {
        answer *= alphaNum;
        answer += ch.charCodeAt(0) - alphaBase + 1;
    }
    return answer;
};