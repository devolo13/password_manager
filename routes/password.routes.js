const PasswordController = require('../controllers/password.controller');
module.exports = function (app) {
  app.post('/api/password', PasswordController.createPassword);
  app.get('/api/password', PasswordController.getAllPasswords);
  app.get('/api/password/:id', PasswordController.getPassword);
  app.delete('/api/password/:id', PasswordController.deleteOnePassword);
  app.patch('/api/password/:id', PasswordController.updateOnePassword);
};
