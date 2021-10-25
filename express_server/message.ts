import express from 'express'
import { Message } from '../view/src/Models/Message';

export async function getMessage(res: express.Response, dbPool : any) {
    let conn;
    try {
      conn = await dbPool.getConnection();
      
      const rows = await conn.query(
        "SELECT band_id AS bandId, msg_seq AS msgSeq, sender_user_id AS senderUserId, msg AS msg FROM band_msg;"
      );
      res.send(rows);

    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      if (conn) return conn.end();
    }
}

export async function setMessage(message: Message, res: express.Response, dbPool : any) {
  let conn;
  try {
    conn = await dbPool.getConnection();
    
    const result = await conn.query(
      "INSERT INTO band_msg (band_id, msg_seq, sender_user_id, msg) VALUES (?,?,?,?);",
      [message.bandId, message.msgSeq, message.senderUserId, message.msg]
    );
    res.send(result);

  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}







