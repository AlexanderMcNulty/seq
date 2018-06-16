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
    retrieve(req, res) {
        return ItemSet
            .findById(req.params.itemSetId, {
                include: [{
                    model: Item,
                    as: 'items',
                }],
            })
            .then(itemSet => {
                if (!itemSet) {
                    return res.status(404).send({
                        message: 'itemSet Not Found',
                    });
                }
                return res.status(200).send(itemSet);
        })
        .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return ItemSet
            .findById(req.params.itemSetId, {
                include: [{
                    model: Item,
                    as: 'items',
                }],
            })
            .then(itemSet => {
                if (!itemSet) {
                    return res.status(404).send({
                        message: 'dude....',
                    });
                }
                return itemSet
                    .update({
                        title: req.body.title || itemSet.title,
                    })
                    .then(() => res.status(200).send(itemSet))
                    .catch((error) => res.status(400).send(error));
                })
                .catch((error) => res.status(400).send(error));
        },   
    destroy(req, res) {
        return ItemSet
            .findById(req.params.itemSetId)
            .then(itemSet => {
                if (!itemSet) {
                    return res.status(400).send({
                        message: 'nada',
                    });
                }
                return itemSet
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
        },
};
