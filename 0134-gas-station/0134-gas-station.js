/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let startingPoint = 0;
    let totalLeftGas = 0;
    let currentLeftGas = 0;
    for (let i = 0; i < gas.length; i++) {
        totalLeftGas += gas[i] - cost[i];
        currentLeftGas += gas[i] - cost[i];
        if (currentLeftGas < 0) {
            currentLeftGas = 0;
            startingPoint = i + 1;
        }
    }
    return totalLeftGas < 0 ? -1 : startingPoint;
};