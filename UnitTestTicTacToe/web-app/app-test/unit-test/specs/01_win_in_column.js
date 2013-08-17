StartTest(function(t) {
    Utils.board = [
        [1, 0, 0],
        [1, 2, 0],
        [1, 2, 0]
    ];
    t.is(Utils.checkFinishGame(), true, 'One player win in column case!')
});


