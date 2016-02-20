app.controller('MainCtrl', ['$scope', 'socket',
    function($scope, socket) {
        $scope.name = 'Tencho'
    }
]).controller('ChatCtrl', ['$scope', 'socket', 'userService',
    function($scope, socket, userService) {
        $scope.name = userService.getUser().name

        // TODO : Populate with history
        $scope.messages = [{sender : 'Tencho', text: 'Hello trolotltotlol'},
        {sender : 'Tencho', text: 'Hello trolotltotlol'},
        {sender : 'Guest', text: 'Hello trolotltotlol'},
        {sender : 'Guest', text: 'Hello trolotltotlol'},
        {sender : 'Tencho', text: 'Hello trolotltotlol'},]

        $scope.sendMessage = function() {
            socket.emit('new message', {
                sender: $scope.name,
                text: $scope.text
            })
        }

        socket.on('new message', function(message){
            $scope.messages.push(message)
        })
    }
])
