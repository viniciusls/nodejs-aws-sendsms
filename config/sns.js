const aws = require('aws-sdk');

const snsClient = () => {
    aws.config.region = 'us-east-1';
    
    return new aws.SNS();
};

module.exports = () => snsClient;
