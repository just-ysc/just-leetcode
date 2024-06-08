/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    let cnt = 0;
    let mask = 1;
    while (n > 0) {
        const masked = n & mask;
        if (masked === 1) cnt++;
        if (cnt > 1) return false;
        n >>= 1;
    }
    return true;
};