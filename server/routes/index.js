const itemController = require('../controllers').itemSet;

module.exports = (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the latest GW!',
    }));

    app.post('/api/items', itemController.create);
    app.get('/api/items', itemController.list);

    app.post('/api/todos/:todoId/items', itemController.create);

};
