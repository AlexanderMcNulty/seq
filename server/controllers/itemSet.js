const ItemSet = require('../models').ItemSet;
const Item = require('../models').Item


module.exports = {
    create(req, res) {
        return ItemSet
            .create({
                title: req.body.title,
            })
            .then(itemSet => res.status(201).send(itemSet))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return ItemSet
            .findAll({
                include: [{
                    model: Item,
                    as: 'items',
                }],
            })
            .then(itemSet => res.status(200).send(itemSet))
            .catch(error => res.status(400).send(error));
    },
};
