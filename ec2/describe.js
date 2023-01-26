const AWS = require('aws-sdk');

const ec2 = new AWS.EC2({
    accessKeyId: 'na',
    secretAccessKey: 'na',
    region: 'us-east-1',
    endpoint: 'http://localhost:4566',
});

ec2.describeInstances((err, data) => {
    if (err) {
        console.log(err);
    } else {
        data.Reservations.forEach(reservation => {
            reservation.Instances.forEach(instance => {
                console.log("Instance ID: ", instance.InstanceId);
                console.log("Instance Type: ", instance.InstanceType);
                console.log("Instance State: ", instance.State.Name);
                console.log("Instance Public IP: ", instance.PublicIpAddress);
                console.log("------------------------------");
            });
        });
    }
});
