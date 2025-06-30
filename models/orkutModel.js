const {pool} = require('pg');

//ambiente da msg
const pool = new pool({
    user: 'postgres',
    host: 'localhost',
    database: 'msg',
    password: 'gabs12345',
    port: 5432,
});