var express = require('express');
var router = express.Router();

var Batismo = require('../controllers/batismo')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/batismos/batisado', function(req, res) {
  // Data retrieve
  Batismo.batisados()
    .then(data => {
      var resultado = []
      data.forEach(b => {
        aux = b.title.split(':')
        nome = aux[1].split('.')
     
        resultado.push(nome[0])
      });
      
      res.json(resultado.sort())
    })
    .catch(err => res.json({error: err}))
  ;
});


router.get('/api/batismos/progenitores', function(req, res) {
  // Data retrieve
  Batismo.progenitores()
    .then(data => res.json(data))
    .catch(err => res.json({error: err}))
  ;
});

router.get('/api/batismos/stats', function(req, res) {
  // Data retrieve
  Batismo.stats()
    .then(data => res.json(data))
    .catch(err => res.json({error: err}))
  ;
});

router.get('/api/batismos/:id', function(req, res) {
  // Data retrieve
  Batismo.lookUp(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json({error: err}))
  ;
});

router.get('/api/batismos', function(req, res) {

  if(req.query.ano){
    Batismo.getAno(req.query.ano)
    .then(data => res.json(data))
      .catch(err => res.json({error: err}));
  }
  else{
  // Data retrieve
      Batismo.list()
      .then(data => res.json(data))
      .catch(err => res.json({error: err}));
  }
});

module.exports = router;
