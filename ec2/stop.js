const AWS = require('aws-sdk');

const ec2 = new AWS.EC2({
    accessKeyId: 'accessKey',
    secretAccessKey: 'secretKey',
    region: 'us-east-1',
    endpoint: 'http://localhost:4566',
});

const params = {
    InstanceIds: ['i-87cb0093eb61944ad']
};

ec2.stopInstances(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});