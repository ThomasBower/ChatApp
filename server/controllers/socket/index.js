module.exports = function(io) {
    return function(socket) {
        // Real-time controllers go here
        require('./chat-controller')(io, socket)
    }
}
