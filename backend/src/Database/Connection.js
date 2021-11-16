const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'sql10.freemysqlhosting.net',
    user: 'sql10451403',
    password: 'yrWr9S7zng',
    database: 'sql10451403',
    connectionLimit: 2,
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