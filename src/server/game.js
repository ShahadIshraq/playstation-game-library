'use strict';
const mongoose = require('mongoose');
const Game = mongoose.model('Game');

const list = (req, res) => {
    console.log('Got');
    Game.find({}, (err, games) => {
        if (err) {
            return res.status(500).json({error: err});
        }
        console.log('Got 1');
        return res.json({ games });
    });
};

const getById = (req, res) => {
    return res.json({ msg: 'TODO' });
};

const create = (req, res) => {
    const newGame = new Game();
    console.log(req.body);
    newGame.name = req.body.name;
    newGame.platform = req.body.platform;
    newGame.releasedOn = req.body.releasedOn || Date.now();
    newGame.save((err, game) => {
        if (err) {
            return res.status(500).json({error: err});
        }
        return res.json({ game });
    });
};

const update = (req, res) => {
    return res.json({ msg: 'TODO' });
};

module.exports = {
    list,
    getById,
    create,
    update,
}