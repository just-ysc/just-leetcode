class Solution {
    boolean[] dupChecker = new boolean[9];

    public boolean isValidSudoku(char[][] board) {
        
        for (int i = 0; i < board.length; i++) {
            if (!isValidRow(board[i])) return false;
            if (!isValidColumn(board, i)) return false;
        }

        for (int i = 0; i < board.length; i += 3) {
            for (int j = 0; j < board[0].length; j += 3) {
                if (!isValidBlock(board, i, j)) return false;
            }
        }
        return true;
    }

    private void cleanDupChecker() {
        for (int i = 0; i < dupChecker.length; i++) {
            dupChecker[i] = false;
        }
    }

    private boolean isValidRow(char[] board) {
        cleanDupChecker();
        for (char c : board) {
            if (c == '.') {
                continue;
            } else if (dupChecker[Character.getNumericValue(c) - 1]) {
                return false;
            } else {
                dupChecker[Character.getNumericValue(c) - 1] = true;
            }

        }
        return true;
    }

    private boolean isValidColumn(char[][] board, int columnIdx) {
        cleanDupChecker();
        for (int i = 0; i < board.length; i++) {
            char c = board[i][columnIdx];
            if (c == '.') {
                continue;
            } else if (dupChecker[Character.getNumericValue(c) - 1]) {
                return false;
            } else {
                dupChecker[Character.getNumericValue(c) - 1] = true;
            }
        }
        return true;
    }

    private boolean isValidBlock(char[][] board, int rowIdx, int columnIdx) {
        cleanDupChecker();
        for (int i = rowIdx; i < rowIdx + 3; i++) {
            for (int j = columnIdx; j < columnIdx + 3; j++) {
                char c = board[i][j];
                if (c == '.') {
                    continue;
                } else if (dupChecker[Character.getNumericValue(c) - 1]) {
                    return false;
                } else {
                    dupChecker[Character.getNumericValue(c) - 1] = true;
                }
            }
        }
        return true;
    }
}