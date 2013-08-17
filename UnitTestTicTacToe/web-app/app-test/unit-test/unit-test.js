var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
    title     : 'Unit Test for TicTacToe',
    hostPageUrl: '../../index.gsp'
});

Harness.start([{
    group: 'Test for function checkFinishGame()',
    items: [{
        title : 'Win in column',
        url : 'specs/01_win_in_column.js'
    }, {
        title : 'Win in row',
        url : 'specs/02_win_in_row.js'
    }, {
        title : 'Win in diag',
        url : 'specs/03_win_in_diag.js'
    }, {
        title : 'Game draw',
        url : 'specs/04_game_draw.js'
    }]
}]);
