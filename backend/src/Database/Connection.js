const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'sql10.freemysqlhosting.net',
    user: 'sql10451212',
    password: 'tUM83mfke1',
    database: 'sql10451212',
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