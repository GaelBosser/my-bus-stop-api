const db = require('_helpers/db');
const Arret = db.Arret;

module.exports = {
    getAll,
    getById,
    update,
    create,
    delete: _delete
};

async function getAll() {
    return await Arret.find().select('-hash');
}

async function getById(id) {
    return await Arret.findById(id).select('-hash');
}

async function update(id, arretParam) {
    const arret = await Arret.findById(id);

    // validate
    if (!arret) throw 'Arret not found';
    if (arret.name !== arretParam.name && arret.state !== arretParam.state && await Arret.findOne({ name: arretParam.name })) {
        throw 'Arret "' + arretParam.name + '" cannot be modify';
    }

    // copy arretParam properties to arret
    Object.assign(arret, arretParam);

    await arret.save();
}

async function create(arretParam) {
    const arret = new Arret(arretParam);

    // save arret
    await arret.save();
}

async function _delete(id) {
    await Arret.findByIdAndRemove(id);
}
