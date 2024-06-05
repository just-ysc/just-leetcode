/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const markBoundaryNeighbors = (i, j) => {
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] !== 'O') return;
        board[i][j] = '#';
        const neighbors = [
            [i - 1, j],
            [i, j - 1],
            [i, j + 1],
            [i + 1, j],
        ];

        neighbors.forEach(([ni, nj]) => {
            markBoundaryNeighbors(ni, nj);
        });
    }

    for (let i = 0; i < board.length; i++) {
        if (board[i][0] === 'O') {
            markBoundaryNeighbors(i, 0);
        }
        if (board[i][board[0].length - 1] === 'O') {
            markBoundaryNeighbors(i, board[0].length - 1);
        }
    }

    for (let j = 0; j < board[0].length; j++) {
        if (board[0][j] === 'O') {
            markBoundaryNeighbors(0, j);
        }
        if (board[board.length - 1][j] === 'O') {
            markBoundaryNeighbors(board.length - 1, j);
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === '#') {
                board[i][j] = 'O';
            }
        }
    }
};

