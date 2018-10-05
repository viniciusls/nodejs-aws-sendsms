module.exports.create = (application, req, res) => {
    res.send('Not implemented');
};

module.exports.send = (application, req, res) => {
    const body = req.body;

    req.assert('phonenumber', 'O número do destinatário é obrigatório.').notEmpty();
    req.assert('message', 'A mensagem é obrigatória.').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        res.send(errors);

        return;
    }
    
    const params = {
        Message: body.message,
        MessageStructure: 'string',
        PhoneNumber: body.phonenumber
    };

    const sns = application.config.sns();

    sns.publish(params, (err, data) => {
        if (err) res.send(err);
        else res.send(data);
    });
};
