const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'greendatabase',
    connectionLimit: 1,
});

module.exports = {
    async initializeDatabase(){
        let conn;
    
        try{
            conn = await pool.getConnection();
            const tables = await conn.query("SHOW TABLES");
            console.log(tables);
        }
        catch(err){
            throw err;
        }
    },
    
    getPool(){
        return pool;
    }
}