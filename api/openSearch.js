import AWS from 'aws-sdk';
AWS.config.update({ region: 'us-east-1' });
const client = new AWS.OpenSearch({ apiVersion: '2021-01-01' });

const url = '';
const params = {
  /** input parameters */
};
const command = new client.AcceptInboundConnectionCommand(params);

try {
  const data = await client.send(command);
} catch (error) {
  console.log(error);
}
