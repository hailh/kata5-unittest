Utils = {
    count: 0,
    moveCount: 0,
    gameStatus: 0,
    timeSchedule: 0,
    board: [[0, 0, 0], [0, 0, 0],[0, 0, 0]],

    playOneStep: function (x, y, state){
        if(Utils.board[x][y] == 0){
            Utils.board[x][y] = state;
        }
        Utils.moveCount++;
    },

    checkFinishGame: function () {
        return false;
    }
}

