const Pool = require('pg').Pool;  //for conecting to postgress db

const pool=new Pool({
    user: 'postgres',
    password: 'admin123',
    host: 'localhost',
    port: 5432 ,
    database: 'testdb'
})

module.exports=pool;