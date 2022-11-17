'use strict';
require('dotenv').config();

import fetch from 'node-fetch';

//pull data from Yelp, return a list of objects/hotels
export default async function yelpData(offset) {
  const _apiKey = process.env.API_KEY;
  console.log(_apiKey);
  const baseUrl = 'https://api.yelp.com/v3/businesses/search';
  const term = 'hotel',
    location = 'manhattan',
    open_now = true,
    limit = 50,
    offset = offset;

  const url = `${baseUrl}?term=${term}&location=${location}&open_now=${open_now}&limit=${limit}&offset=${offset}`;
  console.log(url);

  const data = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: _apiKey,
    },
  })
    .then((result) => result.json())
    .catch((error) => console.log(error));
  return data;
}
