const AWS = require('aws-sdk');

const cloudFormation = new AWS.CloudFormation({
    accessKeyId: 'na',
    secretAccessKey: 'na',
    region: 'us-east-1',
    endpoint: 'http://localhost:4566',
});

cloudFormation.describeStacks((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
