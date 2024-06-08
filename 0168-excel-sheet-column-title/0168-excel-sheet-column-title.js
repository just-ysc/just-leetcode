/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const asciiBase = 'A'.charCodeAt(0);
    const base = 26;
    let answer = '';
    columnNumber--;

    do {
        const remainder = columnNumber % base;
        answer += String.fromCharCode(asciiBase + remainder);
        columnNumber = Math.floor(columnNumber / base) - 1;
    } while (columnNumber >= 0)

    return answer.split('').reverse().join('');
};