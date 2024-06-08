/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const WATER = 0;
    const LAND = 1;

    const getCellPerimeter = (i, j) => {
        const neighbors = [
            [i - 1, j],
            [i, j - 1],
            [i, j + 1],
            [i + 1, j]
        ];

        return neighbors.reduce((acc, cur) => {
            if (cur[0] < 0 || cur[1] < 0 || cur[0] >= grid.length || cur[1] >= grid[0].length || grid[cur[0]][cur[1]] === WATER) {
                return acc + 1;
            } else {
                return acc;
            }
        }, 0);
    }

    let perimeter = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === LAND) perimeter += getCellPerimeter(i, j);
        }
    }

    return perimeter;
};