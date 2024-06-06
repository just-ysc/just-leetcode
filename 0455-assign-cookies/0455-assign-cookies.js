/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let answer = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let gPtr = 0;
    let sPtr = 0;

    while (gPtr < g.length && sPtr < s.length) {
        if (g[gPtr] <= s[sPtr]) {
            answer++;
            gPtr++;
        }
        sPtr++;
    }

    return answer;
};