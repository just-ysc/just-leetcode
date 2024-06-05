/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const trimmed = [...s.toLowerCase()].filter(char => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'));
    const trimmedString = trimmed.join();
    trimmed.reverse();
    const reversedString = trimmed.join();
    return trimmedString === reversedString;
};