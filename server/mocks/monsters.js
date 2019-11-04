/* eslint-env node */
module.exports = function(app) {
  var express = require('express');
  var monstersRouter = express.Router();

  monstersRouter.get('/', function(req, res) {
    res.send({
      'monsters': [
        {
          id:1,
          name:'Sparkachu',
          level:'3',
          imageUrl:'',
          price:0,
          location:'https://s3.amazonaws.com/monsterbattle/electric.png'
        },
        {
          id:2,
          name:'Charember',
          level:'4',
          imageUrl:'',
          price:0,
          location:'https://s3.amazonaws.com/monsterbattle/electric.png'
        },
        {
          id:3,
          name:'Rhauk',
          level:'3',
          imageUrl:'',
          price:0,
          location:'https://s3.amazonaws.com/monsterbattle/electric.png'
        },
        {
          id:4,
          name:'Floralee',
          level:'9',
          imageUrl:'',
          price:0,
          location:'https://s3.amazonaws.com/monsterbattle/electric.png'
        },
        {
          id:5,
          name:'Spruce Lee',
          level:'6',
          imageUrl:'',
          price:0,
          location:'https://s3.amazonaws.com/monsterbattle/electric.png'
        },
        {
          id:6,
          name:'Zombird',
          level:'7',
          imageUrl:'',
          price:0,
          location:'https://s3.amazonaws.com/monsterbattle/electric.png'
        },
        {
          id:7,
          name:'Woggen',
          level:'2',
          imageUrl:'',
          price:0,
          location:'https://s3.amazonaws.com/monsterbattle/electric.png'
        },
        {
          id:8,
          name:'Poddle',
          level:'8',
          imageUrl:'',
          price:0,
          location:'https://s3.amazonaws.com/monsterbattle/electric.png'
        },
        {
          id:9,
          name:'Torchee',
          level:'4',
          imageUrl:'',
          price:0,
          location:'https://s3.amazonaws.com/monsterbattle/electric.png'
        },
        {
          id:10,
          name:'Quartinoun',
          level:'4',
          imageUrl:'',
          price:0,
          location:'https://s3.amazonaws.com/monsterbattle/electric.png'
        }
      ]
    });
  });

  monstersRouter.post('/', function(req, res) {
    res.send({
      'monsters': {
        id: 100
      }
    });
  });

  monstersRouter.get('/:id', function(req, res) {
    res.send({
      'monsters': {
        id: req.params.id,
        name:'Sparkachu',
        level:'3',
        imageUrl:'',
        price:0,
        location:'https://s3.amazonaws.com/monsterbattle/electric.png'
      }
    });
  });

  monstersRouter.put('/:id', function(req, res) {
    res.send({
      'monsters': {
        id: req.params.id,
        name:'Sparkachu',
        level:'3',
        imageUrl:'',
        price:0,
        location:'https://s3.amazonaws.com/monsterbattle/electric.png'
      },
    });
  });

  monstersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/monsters', require('body-parser').json());
  app.use('/v2/monsters', monstersRouter);
};
