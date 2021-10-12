import express from 'express'
import { getMessage, setMessage } from './message'
import bodyParser from 'body-parser';

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

//app.use(bodyParser.urlencoded({ extended: true}));
//app.use(bodyParser.json);
app.use(bodyParser.json());

app.get('/', (req: express.Request, res: express.Response) => {

  // asyncFunction(res);
});

app.get('/message/', (req: express.Request, res: express.Response) => {

  getMessage(res, pool);
});

app.post('/message/', (req: express.Request, res: express.Response) => {

  setMessage(req, res, pool);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});