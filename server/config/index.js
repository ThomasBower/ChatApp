var Confidence = require('confidence'),
    root = require('path').normalize(__dirname + '/../..'),
    store = new Confidence.Store({
        app: {
            name: 'chat-game',
            port: {
                $filter: 'env',
                production: process.env.PORT,
                test: process.env.PORT,
                $default: 3000
            }
        },
        rootPath: root,
        database: {
            $filter: 'env',
            production: process.env.MONGOLAB_URI,
            staging: 'mongodb://localhost/chat_staging',
            development: 'mongodb://localhost/chat_development',
            test: 'mongodb://localhost/chat_test',
            $default: 'mongodb://localhost/chat_development'
        }
    })

module.exports = {
    getValueForEnvironment: function(key, env) {
        return store.get(key, {
            env: env
        })
    }
}
