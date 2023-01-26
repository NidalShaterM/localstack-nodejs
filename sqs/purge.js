const AWS = require('aws-sdk');

const sqs = new AWS.SQS({
    endpoint: new AWS.Endpoint('http://localhost:4566'),
    accessKeyId: 'na',
    secretAccessKey: 'na',
    region: 'us-east-1'
});

const queueUrl = 'http://localhost:4566/000000000000/sample-queue';


const params = {
  QueueUrl: queueUrl
};

sqs.purgeQueue(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
