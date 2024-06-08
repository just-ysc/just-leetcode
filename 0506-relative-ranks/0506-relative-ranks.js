/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const sortedScores = [...score].sort((a, b) => b - a);
    const rankMap = new Map();
    sortedScores.forEach((score, idx) => {
        let rank;
        if (idx === 0) {
            rank = 'Gold Medal';
        } else if (idx === 1) {
            rank = 'Silver Medal';
        } else if (idx === 2) {
            rank = 'Bronze Medal';
        } else {
            rank = (idx + 1).toString();
        }
        rankMap.set(score, rank);
    });
    
    return score.map(s => rankMap.get(s));
};