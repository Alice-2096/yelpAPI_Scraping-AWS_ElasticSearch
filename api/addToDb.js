import AWS from 'aws-sdk';
AWS.config.update({ region: 'us-east-1' });

export default function addToDb(data) {
  //store data scraped from Yelp API to DynamoDB
  const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
  const tableName = 'yelp-restaurant';

  for (const hotel in data) {
    let date = new Date().toJSON();
    console.log(date);
    let params = {
      TableName: tableName,
      Item: {
        id: { S: hotel['id'] },
        insertedAtTimestamp: { S: date },
        name: { S: hotel['name'] },
        address: { S: JSON.stringify(hotel['location']) },
        review_counts: { S: hotel['review_count'] },
        ratings: { S: hotel['rating'] },
        phone: { S: hotel['phone'] },
      },
    };
    // Call DynamoDB to add the item to the table
    ddb.putItem(params, function (err, data) {
      if (err) {
        console.log('Error', err);
      } else {
        console.log('Success', data);
      }
    });
  }
}
