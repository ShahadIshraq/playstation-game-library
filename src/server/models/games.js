'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  name: { type: String, required: true },
  platform: { type: String, required: true },
  genre: { type: String },
  releasedOn: {type: Date, default: Date.now},
  noOfPlayers: { type: Number },
  publisher: { type: String },
  boxArt: { data: Buffer, contentType: String },
  createdAt: {type: Date, default: Date.now},
}, {
  toJSON: {getters: true, virtuals: true},
});

const Game = mongoose.model('Game', GameSchema);

module.exports = {
  GameSchema
};
