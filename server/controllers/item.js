const Item = require('../models').Item;

module.exports = {
    create(req,res) {
        return Item
            .create({
                content: req.body.content,
                itemSetId: req.params.itemSetId,
            })
            .then(item => res.status(201).send(item))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Item
            .find({
                where: {
                    id: req.params.itemId,
                    itemSetId: req.params.itemSetId,
                }, 
            })
            .then(item => {
                if(!item) {
                    return res.status(404).send({
                        message: "item not found",
                   });
            }
            return item
                .update({
                    content: req.body.content || item.content,
                    complete: req.body.complete || item.complete,
                })
                .then(updatedItem => res.status(200).send(updatedItem))
                .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    destroy(req, res) {
        return Item
            .find({
                where: {
                    id: req.params.itemId,
                    itemSetId: req.params.itemSetId,
                },
            })
            .then(item => {
                if(!item) {
                    return res.status(404).send({
                        message: 'item not found',
                    });
                }
                return item
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },
};
                


