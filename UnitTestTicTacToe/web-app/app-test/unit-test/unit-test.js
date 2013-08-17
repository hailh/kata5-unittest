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
    }]
}]);
