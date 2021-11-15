const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '',
    user: '',
    password: '',
    connectionLimit: 1
});

module.exports = {
    async initializeDatabase(){
        let conn;
    
        try{
            conn = await pool.getConnection();
            if(conn){
                const database = await conn.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
                console.log(database);
            }
        }
        catch(err){
            throw err;
        }
    },
    
    getPool(){
        return pool;
    }
}