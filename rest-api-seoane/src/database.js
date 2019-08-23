const mysql = require('mysql')

const pool = mysql.createPool ({
    host: 'localhost',
    user: 'jesus',
    password: '123',
    database: 'seoane'
})

pool.getConnection((err, connection) => {
    if (connection) {
        console.log('Conectado a la base de datos')
        connection.release()
    }else {
        console.log(err)
    }
})

module.exports = pool