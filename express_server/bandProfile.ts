import express from 'express'
import { BandProfile } from '../view/src/Models/BandProfile';

let sqlSltBandProfile = 
  "SELECT " + 
  "id AS id," + 
  "overview AS overview," + 
  "introduction AS introduction," + 
  "leader_id AS leaderId," + 
  "member_id AS memberId," + 
  "url AS url," + 
  "genre AS genre," + 
  "status AS status," + 
  "activity_area AS activityArea," + 
  "activity_date AS activityDate, " + 
  "direction_id AS directionId," + 
  "is_online_allow AS isOnlineAllow," + 
  "recruitment_part AS recruitmentPart," + 
  "rule_lower_age AS ruleLowerAge," + 
  "rule_upper_age AS ruleUpperAge," + 
  "rule_sex AS ruleSex " +
  "FROM band;";

let sqlInsBandProfile = 
"INSERT INTO band (" + 
"id," + 
"overview," + 
"introduction," + 
"leader_id," + 
"member_id," + 
"url," + 
"genre," + 
"status," + 
"activity_area," + 
"activity_date, " + 
"direction_id," + 
"is_online_allow," + 
"recruitment_part," + 
"rule_lower_age," + 
"rule_upper_age," + 
"rule_sex " +
") VALUES (" + 
"?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?" +
");";

export async function getBandProfile(res: express.Response, dbPool : any) {
    let conn;
    try {
      conn = await dbPool.getConnection();
      
      const rows = await conn.query(sqlSltBandProfile);
      res.send(rows);
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      if (conn) return conn.end();
    }
}

export async function setBandProfile(bandProfile: BandProfile, res: express.Response, dbPool : any) {
  let conn;
  try {
    conn = await dbPool.getConnection();
    
    const result = await conn.query(
      sqlInsBandProfile,
      [
        bandProfile.id,
        bandProfile.overview,
        bandProfile.introduction,
        bandProfile.leaderId,
        bandProfile.memberId,
        bandProfile.url,
        bandProfile.genre,
        bandProfile.status,
        bandProfile.activityArea,
        bandProfile.activityDate,
        bandProfile.directionId,
        bandProfile.isOnlineAllow,
        bandProfile.recruitmentPart,
        bandProfile.ruleLowerAge,
        bandProfile.ruleUpperAge,
        bandProfile.ruleSex,
      ]
    );
    // res.send(result);

  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}







