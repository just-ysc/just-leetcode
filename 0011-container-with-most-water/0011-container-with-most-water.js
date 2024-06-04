/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let maxArea = 0;
    while (i < j) {
        const currentArea = calcArea(i, j, Math.min(height[i], height[j]));
        maxArea = Math.max(maxArea, currentArea);
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return maxArea;
};

function calcArea(start, end, minHeight) {
    return (end - start) * minHeight;
}