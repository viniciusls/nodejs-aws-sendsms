const aws = require('aws-sdk');

aws.config.region = 'us-east-1';

const sns = new aws.SNS();

const params = {
    Message: 'This is a test message',
    MessageStructure: 'string',
    PhoneNumber: ''
};

sns.publish(params, (err, data) => {
    if (err) console.log(err, err.stack);
    else console.log(data);
});
