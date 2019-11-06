const express = require('express');
const router = express.Router();
const favoriService = require('./favori.service');

// routes
router.get('/:idUser', getByIdUser);
router.get('/', getAll);
router.post('/create', create);
router.delete('/:idUser/:idArret', _delete);

module.exports = router;

function getAll(req, res, next) {
    favoriService.getAll()
        .then(favoris => res.json(favoris))
        .catch(err => next(err));
}

function getByIdUser(req, res, next) {
    favoriService.getByIdUser(req.params.idUser)
        .then(favoris => res.json(favoris))
        .catch(err => next(err));
}

function create(req, res, next) {
    favoriService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    favoriService.delete(req.params.idUser, req.params.idArret)
        .then(() => res.json({}))
        .catch(err => next(err));
}
