const db = require('../models');

// THIS NEEDS WORK
module.exports = {
    findAll: function(req, res) {
        console.log('hello');
        db.GoogleBook
            .find(req.query)
            .sort({ _id: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.GoogleBook
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // THIS ONE NEEDS WORK
    create: function(req, res) {
        db.GoogleBook
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // THIS ONE NEEDS WORK
    update: function(req, res) {
        db.GoogleBook
            .findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }, 
    // THIS ONE NEEDS WORK
    remove: function(req, res) {
        db.GoogleBook
            .findById(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}