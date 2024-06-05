/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const DEAD = 0;
const LIVE = 1;

var gameOfLife = function(board) {
    const flippedBoard = [];
    for (let i = 0; i < board.length; i++) {
        flippedBoard.push(new Array(board[i].length).fill(false));
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const originalValue = board[i][j];
            board[i][j] = getNextGeneration(board, i, j, flippedBoard);
            if (board[i][j] !== originalValue) flippedBoard[i][j] = true;
        }
    }
};

function getOriginalValue(board, i, j, flippedBoard) {
    return flippedBoard[i][j] ? (board[i][j] === LIVE ? DEAD : LIVE) : board[i][j];
}

function getNextGeneration(board, i, j, flippedBoard) {
    let deadNeighbors = 0;
    let liveNeighbors = 0;
    const neighbors = [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
        [i, j - 1],
        [i, j + 1],
        [i + 1, j - 1],
        [i + 1, j],
        [i + 1, j + 1],
    ];

    for (const [ni, nj] of neighbors) {
        if (ni < 0 || nj < 0 || ni >= board.length || nj >= board[ni].length) {
            continue;
        }
        
        const neighborOriginValue = getOriginalValue(board, ni, nj, flippedBoard);
        if (neighborOriginValue === DEAD) {
            deadNeighbors++;
        } else {
            liveNeighbors++;
        }
    }

    if (board[i][j] === DEAD) {
        if (liveNeighbors === 3) {
            return LIVE;
        } else {
            return DEAD;
        }
    } else {
        if (liveNeighbors === 2 || liveNeighbors === 3) {
            return LIVE;
        } else {
            return DEAD;
        }
    }
}