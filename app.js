import express from 'express';
import scrape from './api/scrape';
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  scrape();
});

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});
