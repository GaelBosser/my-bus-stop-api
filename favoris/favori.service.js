const db = require('_helpers/db');
const arretService = require('../arrets/arret.service');
const Favori = db.Favori;

module.exports = {
    getAll,
    getByIdUser,
    create,
    delete: _delete
};

async function getAll() {
    return await Favori.find().select('-hash');
}

async function getByIdUser(idUser) {
    var favorisUser = await Favori.find({ idUser: idUser }).select('-hash');

    var arretsFavoris = new Array();

    if(favorisUser.length > 0){
      for (let i = 0; i < favorisUser.length; i++) {
        var arret = await arretService.getById(favorisUser[i].idArret);
        arretsFavoris.push(arret);
      }
    }

   return arretsFavoris;
}

async function create(favoriParam) {
    // validate
    if (await Favori.findOne({ idUser: favoriParam.idUser, idArret: favoriParam.idArret })) {
        throw 'Cet arret est deja present dans votre liste de favoris';
    }

    const favori = new Favori(favoriParam);
    // save favori
    await favori.save();
}

async function _delete(idUser, idArret) {
    await Favori.deleteOne({ idUser: idUser, idArret: idArret });
}
