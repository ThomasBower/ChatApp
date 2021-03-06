// Socket io service wrapper
app.factory('socket', function($rootScope) {
    var socket = io.connect();
    return {
        on: function(eventName, callback) {
            socket.on(eventName, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function(eventName, data, callback) {
            socket.emit(eventName, data, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }
    };
}).factory('userService', function(){
    var user = {
        name: 'Guest',
        points: 0
    }

    return {
        getUser: function(){
            return user
        },
        setName: function(name){
            user.name = name
        }
    }
})
