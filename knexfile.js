var path = require('path');

module.exports = {
    'client': 'postgres',
    'connection': {
        'database': 'ball_under_arch_db',
        'host': 'db',
        'password': 'mysecretpassword',
        'user': 'bua_user'
    },
    'migrations': {
        'directory': path.resolve('./src/api/db/migrations')
    },
    // 'seeds': {
    //     'directory': path.resolve('./src/api/db/seeds')
    // }
};
