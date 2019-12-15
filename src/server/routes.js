'use strict';
const game = require('./game');

module.exports = function (app) {
  app.get('/api/games', game.list);
  app.get('/api/games/:id', game.getById);
  app.post('/api/games', game.create);
  app.put('/api/games/:id', game.update);
};
