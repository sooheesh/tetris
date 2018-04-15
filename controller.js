tetris.controller("MainCtrl", function ($scope) {

    $scope.userNameList = [
        'Giant Panda',
        'Tiger',
        'Blue whale',
        'Asian elephant',
        'Sea otter',
        'Snow leopard',
        'Gorilla',
        'Whooping crane',
        'Orangutan',
        'Red kangaroo'
    ]
    $scope.userNameIdx = 0;
    $scope.generateRndUserNameIdx = function()
    {
        $scope.userNameIdx = Math.floor((Math.random() * 9) + 0);
    }
    $scope.range = function(n)
    {
        var array = [];
        for (var i = 0; i < n; i++) {
            array.push(i);
        }
        return array;
    }

    $scope.generateRndUserNameIdx();
});