const aws = require('aws-sdk');

module.exports.create = (application, req, res) => {
    res.send('Not implemented');
};

module.exports.send = (application, req, res) => {
    const body = req.body;

    aws.config.region = 'us-east-1';
    
    const sns = new aws.SNS();
    
    const params = {
        Message: 'This is a test message',
        MessageStructure: 'string',
        PhoneNumber: body.phonenumber
    };
    
    sns.publish(params, (err, data) => {
        if (err) res.send(err);
        else res.send(data);
    });
};
