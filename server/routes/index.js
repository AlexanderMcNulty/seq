const itemSetController = require('../controllers').itemSet;
const itemController = require('../controllers').item;

module.exports = (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the latest GW!',
    }));

    app.post('/api/sets', itemSetController.create);
    app.get('/api/sets', itemSetController.list);

    app.post('/api/sets/:itemSetId/items', itemController.create);

};
