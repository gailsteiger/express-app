'use strict'
let express = require('express')
let router = express.Router()
let Datastore = require('nedb')
let db = new Datastore({ filename: 'temp/posts.db', autoload: true });

router.get('/', (req, res, next) => {
    db.find({}, (err, docs) => {
        if (err) throw Error(err)
        res.json(docs)
    });
});

router.post('/', (req, res, next) => {
    db.insert(req.body, (err, doc) => {
        if (err) throw Error(err)
        res.json(doc)
    });
});

module.exports = router;
