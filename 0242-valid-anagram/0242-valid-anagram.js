/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const cntMap = new Map();
    for (const char of [...s]) {
        if (!cntMap.has(char)) {
            cntMap.set(char, 0);
        }
        cntMap.set(char, cntMap.get(char) + 1);
    }

    for (const char of [...t]) {
        if (!cntMap.has(char) || cntMap.get(char) <= 0) return false;
        cntMap.set(char, cntMap.get(char) - 1);
    }
    
    return [...cntMap.values()].every(value => value === 0);
};