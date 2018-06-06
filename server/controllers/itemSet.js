const ItemSet = require('../models').ItemSet;

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
            .all()
            .then(itemSet => res.status(200).send(itemSet))
            .catch(error => res.status(400).send(error));
    },
};
