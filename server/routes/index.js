const itemSetController = require('../controllers').itemSet;
const itemController = require('../controllers').item;

module.exports = (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the latest GW!',
    }));

    app.post('/api/sets', itemSetController.create);
    app.get('/api/sets', itemSetController.list);
    app.get('/api/sets/:itemSetId', itemSetController.retrieve);
    app.put('/api/sets/:itemSetId', itemSetController.update);
    app.delete('/api/sets/:itemSetId', itemSetController.destroy);
    app.get("/test", itemSetController.test);
    app.post('/api/sets/:itemSetId/items', itemController.create);
    app.put('/api/sets/:itemSetId/items/:itemId', itemController.update);
    app.delete('/api/sets/:itemSetId/items/:itemId', itemController.destroy);
};
