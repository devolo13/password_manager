const { Password } = require('../models/password.model');

module.exports.createPirate = (request, response) => {
  const {name, website, password, folder, codes, notes, sharedWith} = request.body;
  Password.create({
    name,
    website,
    password,
    folder,
    codes,
    notes,
    sharedWith
  })
    .then((password) => response.json(password))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAllPasswords = (request, response) => {
  Password.find({})
    .then((passwords) => response.json(passwords))
    .catch((err) => response.json(err));
};

module.exports.getPassword = (request, response) => {
  Password.findOne({ _id: request.params.id })
    .then((password) => response.json(password))
    .catch((err) => response.json(err));
};

module.exports.deleteOnePassword = (request, response) => {
  Password.deleteOne({ _id: request.params.id })
    .then((result) => response.json({ result: result }))
    .catch((err) => response.json(err));
};

module.exports.updateOnePassword = (request, response) => {
  Password.findOneAndUpdate({ _id: request.params.id }, request.body)
    .then((updatedPassword) => {
      response.json(updatedPassword);
    })
    .catch((err) => {
      response.json(err);
    });
};
