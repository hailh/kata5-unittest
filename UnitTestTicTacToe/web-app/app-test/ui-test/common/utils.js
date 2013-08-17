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
        return isFinish;
    },

    checkWinInColumn: function () {
        var finish = true;
        for(var i = 0; i < 3; i++){
            finish = true;
            var state = Utils.board[0][i];
            for(var j =0; j < 3; j++){
                console.log(Utils.board[j][i]);
                if(Utils.board[j][i] != state || Utils.board[j][i] == 0){
                    finish = false;
                }
                if(finish == true && j == 2){
                    return true;
                }
            }
        }
    }
}

