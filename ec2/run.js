const AWS = require('aws-sdk');

const ec2 = new AWS.EC2({
    accessKeyId: 'na',
    secretAccessKey: 'na',
    region: 'us-east-1',
    endpoint: 'http://localhost:4566',
});

const params = {
    ImageId: 'ami-0ff8a91507f77f867',
    InstanceType: 't2.micro',
    MinCount: 1,
    MaxCount: 1
};

ec2.runInstances(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
