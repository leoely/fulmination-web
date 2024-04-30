import https from 'https';
import fs from 'fs';
import { CommonHttp, } from 'manner.js/server';

const commonHttp = new CommonHttp({
  title: 'Fulmination',
  content: 'Fulmination document website.',
  fonts: ['ttf'],
  develope: true,
});

https.createServer({
  key: fs.readFileSync('asset/fulmination-web-key.pem'),
  cert: fs.readFileSync('asset/fulmination-web-cert.pem'),
}, async (req, res) => {
  await commonHttp.process(req, res);
}).listen(8000);
