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
        var isFinish = false;
        isFinish = Utils.checkWinInColumn();
        if(!isFinish) {
            isFinish = Utils.checkWinInRow();
            if(!isFinish) {
                isFinish = Utils.checkWinInDiag();
            }
        }
        return isFinish;
    },

    checkWinInColumn: function () {
        var finish = true;
        for(var i = 0; i < 3; i++){
            finish = true;
            var state = Utils.board[0][i];
            for(var j =0; j < 3; j++){
                if(Utils.board[j][i] != state || Utils.board[j][i] == 0){
                    finish = false;
                }
                if(finish == true && j == 2){
                    return true;
                }
            }
        }
    },

    checkWinInRow: function () {
        var finish = true;
        for(var i = 0; i < 3; i++){
            finish = true;
            var state = Utils.board[i][0];
            for(var j =0; j < 3; j++){
                if(Utils.board[i][j] != state || Utils.board[i][j] == 0){
                    finish = false;
                }
                if(finish == true && j == 2){
                    return true;
                }
            }
        }
    },

    checkWinInDiag: function () {
        if(Utils.board[0][0] == Utils.board[1][1] == Utils.board[2][2] && Utils.board[0][0] != 0) return true;
        if(Utils.board[0][2] == Utils.board[1][1] == Utils.board[2][0] && Utils.board[0][2] != 0) return true;
        return false;
    }
}

