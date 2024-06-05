/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let answer = 0;
    const reversed = [];
    while (n > 0) {
        reversed.push(n % 2);
        n = Math.floor(n / 2);
    }

    let base = Math.pow(2, 31);
    for (const r of reversed) {
        answer += r * base;
        base /= 2;
    }

    return answer;
};