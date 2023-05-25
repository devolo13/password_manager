const { User } = require('../models/user.model');

module.exports.createUser = (request, response) => {
  const {username, loginPassword, passwords = []} = request.body;
  User.create({
    username,
    loginPassword,
    passwords,
  })
    .then((user) => response.json(user))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAllUsers = (request, response) => {
  User.find({})
    .then((users) => response.json(users))
    .catch((err) => response.json(err));
};

module.exports.getUser = (request, response) => {
  User.findOne({ _id: request.params.id })
    .then((user) => response.json(user))
    .catch((err) => response.json(err));
};

module.exports.deleteOneUser = (request, response) => {
  User.deleteOne({ _id: request.params.id })
    .then((result) => response.json({ result: result }))
    .catch((err) => response.json(err));
};

module.exports.updateOneUser = (request, response) => {
  User.findOneAndUpdate({ _id: request.params.id }, request.body)
    .then((updatedUser) => {
      response.json(updatedUser);
    })
    .catch((err) => {
      response.json(err);
    });
};
