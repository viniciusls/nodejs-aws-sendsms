module.exports = (application) => {
    application.get('/messages/create', (req, res) => {
        application.app.controllers.messages.create(application, req, res);
    });

    application.post('/messages/send', (req, res) => {
        application.app.controllers.messages.send(application, req, res);
    });
};
