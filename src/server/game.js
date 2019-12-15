'use strict';
const mongoose = require('mongoose');
const Game = mongoose.model('Game');
const Busboy = require('busboy');

const list = (req, res) => {
  Game.find({})
  .select('-boxArt')
  .exec((err, games) => {
    if (err) {
      return res.status(500).json({error: err});
    }
    return res.json({ games });
  });
};

const getById = (req, res) => {
  Game.findById(req.params.id, (err, game) => {
    if (err) {
      return res.status(500).json({error: err});
    }
    return res.json({ game });
  });  
};

const create = (req, res) => {
  let buffers = [];
  const busboy = new Busboy({ headers: req.headers });
  busboy.on('field', (fieldname, val) => {
    req.body[fieldname] = val;
  });

  // A file was recieved
  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    file.on("data", (data) => {
        buffers.push(data);
    });

    file.on("end", () => {
        req.body[fieldname] = Buffer.concat(buffers);
        req.body.contentType = mimetype;
    });
  });

  // We're done here boys!
  busboy.on('finish', () => {
    const game = new Game(req.body);
    if (req.body.boxArt) {
      game.boxArt.data = req.body.boxArt;
      game.boxArt.contentType = req.body.contentType;
    }
    console.log(game);
    game.save()
      .then(_ => console.log("YEEAEH!"))
      .catch(err => {console.log(err);});

    res.end();
  });
  return req.pipe(busboy);
};

const update = (req, res) => {
    return res.json({ msg: 'TODO' });
};

const remove = (req, res) => {
  Game.findByIdAndRemove(req.params.id, err => {
    if (err) {
      return res.status(500).json({error: err});
    }
    return res.json({message: 'Deleted'});
  });  
};

module.exports = {
  list,
  getById,
  create,
  update,
  remove,
}