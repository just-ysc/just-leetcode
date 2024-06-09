/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const checker = new Array(n).fill().map(_ => ({
        from: 0,
        to: 0,
    }));

    trust.forEach(([from, to]) => {
        checker[from - 1].to++;
        checker[to - 1].from++;
    });

    const judgeIdx = checker.findIndex((person) => person.to === 0 && person.from === n -1);

    return judgeIdx === -1 ? judgeIdx : judgeIdx + 1;
};