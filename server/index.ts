import express from 'express'

const app: express.Express = express()
const port = 3001
const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: process.env.DB_HOST, 
     user:process.env.DB_USER, 
     password: process.env.DB_PASS,
     database : process.env.DB_DTBS,     
     connectionLimit: 5
});

async function asyncFunction(res: express.Response) {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT 1 as val");
      res.send(rows);  
      
      const result = await conn.query("INSERT INTO band_msg (band_id, msg_seq, sender_user_id, msg) VALUES (?,?,?,?);", ["3", "1","4","mariadb"]);
      console.log(result); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      if (conn) return conn.end();
    }
}

app.get('/', (req: express.Request, res: express.Response) => {

    asyncFunction(res);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})