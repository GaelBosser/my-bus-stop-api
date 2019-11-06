const express = require('express');
const router = express.Router();
const arretService = require('./arret.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.post('/create', create);
router.delete('/:id', _delete);

module.exports = router;

function getAll(req, res, next) {
    arretService.getAll()
        .then(arrets => res.json(arrets))
        .catch(err => next(err));
}

function getById(req, res, next) {
    arretService.getById(req.params.id)
        .then(arret => arret ? res.json(arret) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    arretService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function create(req, res, next) {
    arretService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    arretService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
