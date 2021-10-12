import express from 'express'

export async function getMessage(res: express.Response, dbPool : any) {
    let conn;
    try {
      conn = await dbPool.getConnection();
      
      const rows = await conn.query(
        "SELECT band_id, msg_seq, sender_user_id, msg FROM band_msg;"
      );
      res.send(rows);

    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      if (conn) return conn.end();
    }
}

export async function setMessage(req: express.Request, res: express.Response, dbPool : any) {
  let conn;
  try {
    conn = await dbPool.getConnection();
    
    const result = await conn.query(
      "INSERT INTO band_msg (band_id, msg_seq, sender_user_id, msg) VALUES (?,?,?,?);",
      [req.body.band_id, req.body.msg_seq, req.body.sender_user_id, req.body.msg]
    );
    res.send(result);

  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}







