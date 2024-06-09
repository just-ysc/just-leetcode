/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const counter = Array(26).fill(0);
    const base = 'a'.charCodeAt(0);
    [...s].forEach(ch => {
        counter[ch.charCodeAt(0) - base]++;
    })
    
    return [...s].findIndex(ch => counter[ch.charCodeAt(0) - base] === 1);
};