const Item = require('../models').Item;

module.exports = {
    create(req,res) {
        return Item
            .create({
                content: req.body.content,
                ItemSetId: req.params.setId,
            })
            .then(item => res.status(201).send(item))
            .catch(error => res.status(400).send(error));
    },
};
                


