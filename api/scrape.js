import addToDb from './addToDb.js';
import yelpData from './yelpAPI.js';

//collect 1000 hotel information from Yelp 
export default async function () {
  let offset = 0;
  try {
    while (offset < 1000) {
      let data = await yelpData(offset);
      data = data['businesses'];
      addToDb(data);
      offset += 50;
    }
  } catch (err) {
    console.log(err);
  }
}
