const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '',
    user: '',
    password: '',
    connectionLimit: 1
});

function getPool(){
    return pool;
}

/*async function asyncFunction(){
    let conn;

    try{
        conn = await pool.getConnection();
    }
    catch(err){
        throw err;
    }
    finally{
        if (conn)
            return conn.end();
    }
}*/