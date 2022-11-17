import express from 'express';
import yelpData from './api/yelpAPI';
import addToDb from './api/addToDb.js';
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const data = await yelpData();
  console.log(data['businesses']);
  addToDb(data['businesses']);
  res.send(`<p>${JSON.stringify(data['businesses'])}</p>`);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});
